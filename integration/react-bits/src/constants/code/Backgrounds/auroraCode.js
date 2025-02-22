import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/Aurora/Aurora.jsx?raw';
import css from '@content/Backgrounds/Aurora/Aurora.css?raw';
import tailwind from '@tailwind/Backgrounds/Aurora/Aurora.jsx?raw';
import tsCode from '@ts-default/Backgrounds/Aurora/Aurora.tsx?raw';
import tsTailwind from '@ts-tailwind/Backgrounds/Aurora/Aurora.tsx?raw';

export const aurora = {
  ...(generateCliCommands('Backgrounds/Aurora')),
  installation: `npm i ogl`,
  usage: `import Aurora from './Aurora';
  
<Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  speed={0.5}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}