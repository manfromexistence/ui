import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/Lanyard/Lanyard.jsx?raw';
import css from '@content/Components/Lanyard/Lanyard.css?raw';
import tailwind from '@tailwind/Components/Lanyard/Lanyard.jsx?raw';
import tsCode from '@ts-default/Components/Lanyard/Lanyard.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/Lanyard/Lanyard.tsx?raw';

export const lanyard = {
  ...(generateCliCommands('Components/Lanyard')),
  installation: `npm i three meshline @react-three/fiber @react-three/drei @react-three/rapier`,
  usage: `import Lanyard from './Lanyard'

<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

/* IMPORTANT INFO BELOW

1. You MUST have the card.glb and lanyard.png files in your project and import them
- these can be downloaded from the repo's files, under src/assets/lanyard

2. You can edit your card.glb file in this online .glb editor and change the texture:
- https://modelviewer.dev/editor/

4. The png file is the texture for the lanyard's band and can be edited in any image editor

5. Your Vite configuration must be updated to include the following in vite.config.js:
assetsInclude: ['**/*.glb']

6. For TS users, you might need these changes:

- src/global.d.ts
export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

- src/vite-env.d.ts
/// <reference types="vite/client" />
declare module '*.glb';
declare module '*.png';
*/`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}