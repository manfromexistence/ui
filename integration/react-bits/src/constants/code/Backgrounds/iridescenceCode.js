import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/Iridescence/Iridescence.jsx?raw';
import css from '@content/Backgrounds/Iridescence/Iridescence.css?raw';
import tailwind from '@tailwind/Backgrounds/Iridescence/Iridescence.jsx?raw';
import tsCode from '@ts-default/Backgrounds/Iridescence/Iridescence.tsx?raw';
import tsTailwind from '@ts-tailwind/Backgrounds/Iridescence/Iridescence.tsx?raw';

export const iridescence = {
  ...(generateCliCommands('Backgrounds/Iridescence')),
  installation: `npm i ogl`,
  usage: `import Iridescence from './Iridescence';
  
<Iridescence
  color={[1, 1, 1]}
  mouseReact={false}
  amplitude={0.1}
  speed={1.0}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}

export const iridescenceMock = {
  usage: `import Iridescence from './Iridescence';

<Iridescence
  color={[0, 1, 1]}
  mouseReact={false}
  amplitude={0.1}
  speed={1.0}
/>`
}