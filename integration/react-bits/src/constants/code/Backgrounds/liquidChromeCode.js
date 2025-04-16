import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/LiquidChrome/LiquidChrome.jsx?raw';
import css from '@content/Backgrounds/LiquidChrome/LiquidChrome.css?raw';
import tailwind from '@tailwind/Backgrounds/LiquidChrome/LiquidChrome.jsx?raw';
import tsCode from '@ts-default/Backgrounds/LiquidChrome/LiquidChrome.tsx?raw'
import tsTailwind from '@ts-tailwind/Backgrounds/LiquidChrome/LiquidChrome.tsx?raw'

export const liquidChrome = {
  ...(generateCliCommands('Backgrounds/LiquidChrome')),
  installation: `npm i ogl`,
  usage: `import LiquidChrome from './LiquidChrome';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <LiquidChrome
    baseColor={[0.1, 0.1, 0.1]}
    speed={1}
    amplitude={0.6}
    interactive={true}
  />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}