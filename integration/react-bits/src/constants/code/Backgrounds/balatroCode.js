import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/Balatro/Balatro.jsx?raw';
import css from '@content/Backgrounds/Balatro/Balatro.css?raw';
import tailwind from '@tailwind/Backgrounds/Balatro/Balatro.jsx?raw';
import tsCode from '@ts-default/Backgrounds/Balatro/Balatro.tsx?raw';
import tsTailwind from '@ts-tailwind/Backgrounds/Balatro/Balatro.tsx?raw';

export const balatro = {
  ...(generateCliCommands('Backgrounds/Balatro')),
  installation: `npm i ogl`,
  usage: `import Balatro from './Balatro';
  
<Balatro
  isRotate={false}
  mouseInteraction={true}
  pixelFilter={700}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}