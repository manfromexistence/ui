// app/icons/[id]/page.tsx
import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import IconGrid from './icons-grid';
import LoadMoreButton from './laod-more';
import Link from 'next/link';

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

async function getIconsData(filePath: string): Promise<IconsJson | null> {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const jsonData: IconsJson = JSON.parse(fileContent);

    if (!jsonData || !jsonData.icons) {
      console.error('Invalid JSON data or missing "icons" property.');
      return null;
    }

    return jsonData;
  } catch (error) {
    console.error('Error getting icon data:', error);
    return null;
  }
}

async function iconSetExists(filename: string): Promise<boolean> {
  try {
    const iconsDir = path.join(process.cwd(), 'data', 'icons');
    const files = await fs.readdir(iconsDir);
    return files.includes(`${filename}.json`);
  } catch (error) {
    return false;
  }
}

export async function generateMetadata({ params }: PageProps) {
  const iconsFilePath = path.join(process.cwd(), 'data', 'icons', `${params.id}.json`);
  const iconData = await getIconsData(iconsFilePath);

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
  // Check if icon set exists
  const exists = await iconSetExists(params.id);
  if (!exists) {
    notFound();
  }

  // Get icon data
  const iconsFilePath = path.join(process.cwd(), 'data', 'icons', `${params.id}.json`);
  const iconData = await getIconsData(iconsFilePath);

  if (!iconData) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg text-red-500">Error loading icons.</p>
      </div>
    );
  }

  // Get initial icons (first 1000)
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