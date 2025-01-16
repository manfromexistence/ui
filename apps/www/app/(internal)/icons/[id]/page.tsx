import fs from 'fs/promises';
import path from 'path';
import * as React from 'react';
import { notFound } from 'next/navigation';

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

function IconGrid({ 
  icons, 
  width = 24,
  height = 24
}: { 
  icons: { [key: string]: IconData }; 
  width: number;
  height: number;
}) {
  return (
    <div className="grid-cols-17 grid gap-2">
      {Object.entries(icons).map(([iconName, icon]) => {
        const hasFill = !icon.body.includes('fill="none"');
        const hasStroke = icon.body.includes('stroke=');

        return (
          <div
            key={iconName}
            className="group flex flex-col items-center justify-center rounded-lg py-1.5 transition-colors hover:bg-primary-foreground"
          >
            <div className="flex h-8 w-8 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${width} ${height}`}
                className="flex h-5 w-5 items-center justify-center text-foreground"
                style={{
                  fill: hasFill ? 'currentColor' : 'none',
                  stroke: hasStroke ? 'currentColor' : 'none',
                  strokeWidth: hasStroke ? '2' : undefined,
                }}
                dangerouslySetInnerHTML={{ __html: icon.body }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default async function IconsPage({ params }: PageProps) {
  const exists = await iconSetExists(params.id);
  if (!exists) {
    notFound();
  }

  const iconsFilePath = path.join(process.cwd(), 'public', 'icons', `${params.id}.json`);
  const iconData = await getIconsData(iconsFilePath);

  if (!iconData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">Error loading icons.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mb-32 px-4 pb-8 pt-4">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{iconData.info.name}</h1>
        <p className="text-muted-foreground">
          Version {iconData.info.version} • {Object.keys(iconData.icons).length} icons loaded
        </p>
      </div>

      <IconGrid
        icons={iconData.icons}
        width={iconData.width || 24}
        height={iconData.height || 24}
      />
    </div>
  );
}
