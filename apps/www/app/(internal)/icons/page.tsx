export default function IconsPage() {
  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center">
      <span className="text-2xl font-bold">
        Icons
      </span>
      <span className="text-sm text-muted-foreground">
        Click on the sidebar to see icons!
      </span>
    </div>
  )
}
// import * as React from 'react';
// import { fetch } from "node-fetch"; // Assuming node-fetch is installed
// import IconGrid from './[id]/icons-grid';
// import LoadMoreButton from './[id]/laod-more';

// // Types for the complete icon data structure
// interface IconData {
//   body: string;
// }

// interface IconsJson {
//   prefix: string;
//   info: {
//     name: string;
//     total: number;
//     version: string;
//   };
//   icons: {
//     [key: string]: IconData;
//   };
// }

// async function getIconsData(url: string, maxIcons: number = 1000): Promise<IconsJson | null> {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Failed to fetch icons data: ${response.statusText}`);
//     }

//     const jsonData: IconsJson = await response.json();

//     if (!jsonData || !jsonData.icons) {
//       console.error('Invalid JSON data or missing "icons" property.');
//       return null;
//     }

//     // If we want to limit the number of icons, we can modify the icons object
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

// export default async function IconsPage() {
//   const iconsUrl = "https://your-icon-api.com/api/icons/academicons"; // Replace with your actual icon API URL
//   const iconData = await getIconsData(iconsUrl);

//   if (!iconData) {
//     return (
//       <div className="flex min-h-screen items-center justify-center">
//         <p className="text-red-500">Error loading icons.</p>
//       </div>
//     );
//   }

//   const initialIcons = Object.fromEntries(Object.entries(iconData.icons).slice(0, 1000)); // Initial loaded icons

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-8">
//         <h1 className="mb-2 text-3xl font-bold">{iconData.info.name}</h1>
//         <p className="text-muted">
//           Version {iconData.info.version} • {Object.keys(iconData.icons).length} icons total
//         </p>
//       </div>

//       <IconGrid icons={initialIcons} width={448} height={512} /> {/* Assuming IconGrid handles width and height */}

//       {Object.keys(iconData.icons).length > 1000 && (
//         <LoadMoreButton
//           iconSetId="academicons" // Assuming this is a unique identifier for the icon set
//           totalIcons={Object.keys(iconData.icons).length}
//           initialLoadedCount={1000}
//         />
//       )}
//     </div>
//   );
// }