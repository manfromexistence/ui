/* eslint-disable turbo/no-undeclared-env-vars */
import { notFound } from 'next/navigation';
import Link from 'next/link';

import IconGrid from './icons-grid'; // Make sure this component exists
import LoadMoreButton from './laod-more'; // Make sure this component exists

interface IconData {
  body: string;
}

interface IconsJson {
  prefix: string;
  width: number;
  height: number;
  info: {
    name: string;
    total: number;
    version: string;
    category: string;
    author: {
      name: string;
      url: string;
    };
    license: {
      url: string;
      spdx: string;
    };
    tags: string[];
  };
  icons: {
    [key: string]: IconData;
  };
}

interface PageProps {
  params: {
    id: string;
  };
}

async function fetchIconsData(url: string): Promise<IconsJson | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch icons data: ${response.status} ${response.statusText}`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching icons data:', error);
    return null;
  }
}

async function iconSetExists(id: string, baseUrl: string = process.env.ICONS_BASE_URL || 'https://raw.githubusercontent.com/manfromexistence/ui/main/data/icons/'): Promise<boolean> {
  try {
    const url = `${baseUrl}${id}.json`;
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

export async function generateMetadata({ params }: PageProps) {
  const baseUrl = process.env.ICONS_BASE_URL || 'https://raw.githubusercontent.com/manfromexistence/ui/main/data/icons/';
  const url = `${baseUrl}${params.id}.json`;
  const iconData = await fetchIconsData(url);

  if (!iconData) {
    return {
      title: 'Icons - Not Found',
    };
  }

  return {
    title: `${iconData.info.name} - Icons`,
    description: `${iconData.info.name} icon set containing ${Object.keys(iconData.icons).length} icons.`,
  };
}

export default async function IconsPage({ params }: PageProps) {
  const baseUrl = process.env.ICONS_BASE_URL || 'https://raw.githubusercontent.com/manfromexistence/ui/main/data/icons/';
  const exists = await iconSetExists(params.id, baseUrl);
  if (!exists) {
    notFound();
  }

  const url = `${baseUrl}${params.id}.json`;
  const iconData = await fetchIconsData(url);

  if (!iconData) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg text-red-500">Error loading icons.</p>
      </div>
    );
  }

  const allIcons = Object.entries(iconData.icons);
  const initialIcons = Object.fromEntries(allIcons.slice(0, 1000));
  const totalIcons = Object.keys(iconData.icons).length;

  return (
    <div className="container mx-auto mb-32 px-4 pb-8 pt-4">
      <div className="mb-4">
        <div className="flex items-baseline justify-between">
          <h1 className="mb-2 text-3xl font-bold">{iconData.info.name}</h1>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href={iconData.info.author.url || ""} className="text-muted-foreground hover:underline">
            {iconData.info.author.name}
          </Link>
          <Link href={iconData.info.license.url || ""} className="text-muted-foreground hover:underline">
            {iconData.info.license.spdx}
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        <IconGrid
          icons={initialIcons}
          width={iconData.width || 24}
          height={iconData.height || 24}
        />
        {totalIcons > 1000 && (
          <LoadMoreButton
            iconSetId={params.id}
            totalIcons={totalIcons}
            initialLoadedCount={1000}
          />
        )}
      </div>
    </div>
  );
}