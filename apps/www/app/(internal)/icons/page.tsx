import fs from 'fs/promises';
import path from 'path';
import * as React from 'react';

// Types for the complete icon data structure
interface IconData {
  body: string;
}

interface IconsJson {
  prefix: string;
  info: {
    name: string;
    total: number;
    version: string;
  };
  icons: {
    [key: string]: IconData;
  };
}

async function getIconsData(filePath: string, maxIcons: number = 500): Promise<IconsJson | null> {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const jsonData: IconsJson = JSON.parse(fileContent);

    if (!jsonData || !jsonData.icons) {
      console.error('Invalid JSON data or missing "icons" property.');
      return null;
    }

    // If we want to limit the number of icons, we can modify the icons object
    if (maxIcons > 0) {
      const iconEntries = Object.entries(jsonData.icons).slice(0, maxIcons);
      jsonData.icons = Object.fromEntries(iconEntries);
    }

    return jsonData;
  } catch (error) {
    console.error('Error getting icon data:', error);
    return null;
  }
}

export default async function IconsPage() {
  const iconsFilePath = path.join(process.cwd(), 'public', 'icons', 'academicons.json');
  const iconData = await getIconsData(iconsFilePath);

  if (!iconData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">Error loading icons.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{iconData.info.name}</h1>
        <p className="text-muted">
          Version {iconData.info.version} • {Object.keys(iconData.icons).length} icons loaded
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
        {Object.entries(iconData.icons).map(([iconName, icon]) => (
          <div
            key={iconName}
            className="flex flex-col items-center rounded-lg p-3 transition-colors hover:bg-primary-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-8 w-8"
              dangerouslySetInnerHTML={{ __html: icon.body }}
            />
            <span className="mt-2 w-full break-words text-center text-xs text-muted-foreground">
              {iconName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}