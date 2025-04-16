import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/Orb/Orb.jsx?raw';
import css from '@content/Backgrounds/Orb/Orb.css?raw';
import tailwind from '@tailwind/Backgrounds/Orb/Orb.jsx?raw';
import tsCode from '@ts-default/Backgrounds/Orb/Orb.tsx?raw'
import tsTailwind from '@ts-tailwind/Backgrounds/Orb/Orb.tsx?raw'

export const orb = {
  ...(generateCliCommands('Backgrounds/Orb')),
  installation: `npm i ogl`,
  usage: `import Orb from './Orb';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}