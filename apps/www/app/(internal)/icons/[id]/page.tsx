import fs from 'fs/promises';
import path from 'path';
import * as React from 'react';
import { notFound } from 'next/navigation';
import { variantCategories } from '@/data/variant-category';

interface IconData {
  body: string;
}

interface IconsJson {
  prefix: string;
  info: {
    name: string;
    total: number;
    version: string;
    height: number;
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

interface GroupedIcons {
  [key: string]: {
    [key: string]: IconData;
  };
}

function groupIconsByVariant(iconSet: string, icons: { [key: string]: IconData }): GroupedIcons {
  const variants = variantCategories[iconSet] || [];
  const grouped: GroupedIcons = { 'Default': {} };

  // Create empty groups for each variant
  variants.forEach(([name]) => {
    grouped[name] = {};
  });

  // Sort icons into variant groups
  Object.entries(icons).forEach(([iconName, iconData]) => {
    let matched = false;

    // Check each variant pattern
    for (const [variantName, pattern] of variants) {
      const regex = pattern instanceof RegExp ? pattern : new RegExp(pattern + '$');
      if (regex.test(iconName)) {
        const baseIconName = iconName.replace(regex, '');
        grouped[variantName][baseIconName] = iconData;
        matched = true;
        break;
      }
    }

    // If no variant matches, put in Default group
    if (!matched) {
      grouped['Default'][iconName] = iconData;
    }
  });

  // Remove empty groups
  Object.keys(grouped).forEach(key => {
    if (Object.keys(grouped[key]).length === 0) {
      delete grouped[key];
    }
  });

  return grouped;
}

async function getIconsData(filePath: string, maxIcons: number = 500): Promise<IconsJson | null> {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const jsonData: IconsJson = JSON.parse(fileContent);

    if (!jsonData || !jsonData.icons) {
      console.error('Invalid JSON data or missing "icons" property.');
      return null;
    }

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

async function iconSetExists(filename: string): Promise<boolean> {
  try {
    const iconsDir = path.join(process.cwd(), 'public', 'icons');
    const files = await fs.readdir(iconsDir);
    return files.includes(`${filename}.json`);
  } catch (error) {
    return false;
  }
}

function IconGrid({ 
  icons, 
  viewBox, 
  groupName 
}: { 
  icons: { [key: string]: IconData }; 
  viewBox: string; 
  groupName: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">{groupName}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
        {Object.entries(icons).map(([iconName, icon]) => {
          const hasFill = !icon.body.includes('fill="none"');
          const hasStroke = icon.body.includes('stroke=');

          return (
            <div
              key={iconName}
              className="group flex flex-col items-center rounded-lg p-3 transition-colors hover:bg-accent"
            >
              <div className="flex h-12 w-12 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-foreground"
                  style={{
                    fill: hasFill ? 'currentColor' : 'none',
                    stroke: hasStroke ? 'currentColor' : 'none',
                    strokeWidth: hasStroke ? '2' : undefined,
                  }}
                  dangerouslySetInnerHTML={{ __html: icon.body }}
                />
              </div>
              <span className="mt-2 w-full break-words text-center text-xs text-muted-foreground">
                {iconName}
              </span>
            </div>
          );
        })}
      </div>
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

  const viewBox = "0 0 24 24";
  const groupedIcons = groupIconsByVariant(params.id, iconData.icons);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{iconData.info.name}</h1>
        <p className="text-muted-foreground">
          Version {iconData.info.version} • {Object.keys(iconData.icons).length} icons loaded
        </p>
      </div>

      {Object.entries(groupedIcons).map(([groupName, icons]) => (
        <IconGrid
          key={groupName}
          icons={icons}
          viewBox={viewBox}
          groupName={groupName}
        />
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const iconsDir = path.join(process.cwd(), 'public', 'icons');
    const files = await fs.readdir(iconsDir);
    
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => ({
        id: file.replace('.json', ''),
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// // app/icons/[id]/page.tsx
// import fs from 'fs/promises';
// import path from 'path';
// import * as React from 'react';
// import { notFound } from 'next/navigation';

// interface IconData {
//   body: string;
// }

// interface IconsJson {
//   prefix: string;
//   info: {
//     name: string;
//     total: number;
//     version: string;
//     height: number;
//     category: string;
//     tags: string[];
//   };
//   icons: {
//     [key: string]: IconData;
//   };
// }

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// async function getIconsData(filePath: string, maxIcons: number = 500): Promise<IconsJson | null> {
//   try {
//     const fileContent = await fs.readFile(filePath, 'utf-8');
//     const jsonData: IconsJson = JSON.parse(fileContent);

//     if (!jsonData || !jsonData.icons) {
//       console.error('Invalid JSON data or missing "icons" property.');
//       return null;
//     }

//     if (maxIcons > 0) {
//       const iconEntries = Object.entries(jsonData.icons).slice(0, maxIcons);
//       jsonData.icons = Object.fromEntries(iconEntries);
//     }

//     return jsonData;
//   } catch (error) {
//     console.error('Error getting icon data:', error);
//     return null;
//   }
// }

// async function iconSetExists(filename: string): Promise<boolean> {
//   try {
//     const iconsDir = path.join(process.cwd(), 'public', 'icons');
//     const files = await fs.readdir(iconsDir);
//     return files.includes(`${filename}.json`);
//   } catch (error) {
//     return false;
//   }
// }

// export default async function IconsPage({ params }: PageProps) {
//   const exists = await iconSetExists(params.id);
//   if (!exists) {
//     notFound();
//   }

//   const iconsFilePath = path.join(process.cwd(), 'public', 'icons', `${params.id}.json`);
//   const iconData = await getIconsData(iconsFilePath);

//   if (!iconData) {
//     return (
//       <div className="flex min-h-screen items-center justify-center">
//         <p className="text-red-500">Error loading icons.</p>
//       </div>
//     );
//   }

//   // Use the height from the icon data to set the viewBox
//   const viewBox = `0 0 ${iconData.info.height} ${iconData.info.height}`;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-8">
//         <h1 className="mb-2 text-3xl font-bold">{iconData.info.name}</h1>
//         <p className="text-muted-foreground">
//           Version {iconData.info.version} • {Object.keys(iconData.icons).length} icons loaded
//         </p>
//       </div>

//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
//         {Object.entries(iconData.icons).map(([iconName, icon]) => {
//           const hasFill = !icon.body.includes('fill="none"');
//           const hasStroke = icon.body.includes('stroke=');

//           return (
//             <div
//               key={iconName}
//               className="group flex flex-col items-center rounded-lg p-3 transition-colors hover:bg-accent"
//             >
//               <div className="flex h-12 w-12 items-center justify-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox={viewBox}
//                   className="h-8 w-8 text-foreground"
//                   style={{
//                     fill: hasFill ? 'currentColor' : 'none',
//                     stroke: hasStroke ? 'currentColor' : 'none',
//                     strokeWidth: hasStroke ? '2' : undefined,
//                   }}
//                   dangerouslySetInnerHTML={{ __html: icon.body }}
//                 />
//               </div>
//               <span className="mt-2 w-full break-words text-center text-xs text-muted-foreground">
//                 {iconName}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export async function generateStaticParams() {
//   try {
//     const iconsDir = path.join(process.cwd(), 'public', 'icons');
//     const files = await fs.readdir(iconsDir);
    
//     return files
//       .filter(file => file.endsWith('.json'))
//       .map(file => ({
//         id: file.replace('.json', ''),
//       }));
//   } catch (error) {
//     console.error('Error generating static params:', error);
//     return [];
//   }
// }