import { generateCliCommands } from '@/utils/utils';

import code from '@content/Animations/Ribbons/Ribbons.jsx?raw';
import css from '@content/Animations/Ribbons/Ribbons.css?raw';
import tailwind from '@tailwind/Animations/Ribbons/Ribbons.jsx?raw';
import tsCode from '@ts-default/Animations/Ribbons/Ribbons.tsx?raw';
import tsTailwind from '@ts-tailwind/Animations/Ribbons/Ribbons.tsx?raw';

export const ribbons = {
  ...(generateCliCommands('Animations/Ribbons')),
  installation: `npm i ogl`,
  usage: `import Ribbons from './Ribbons';

<div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
  <Ribbons
    baseThickness={30}
    colors={['#ffffff']}
    speedMultiplier={0.5}
    maxAge={500}
    enableFade={false}
    enableShaderEffect={true}
  />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind,
};
