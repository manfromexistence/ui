import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/Lightning/Lightning.jsx?raw';
import css from '@content/Backgrounds/Lightning/Lightning.css?raw';
import tailwind from '@tailwind/Backgrounds/Lightning/Lightning.jsx?raw';
import tsCode from '@ts-default/Backgrounds/Lightning/Lightning.tsx?raw'
import tsTailwind from '@ts-tailwind/Backgrounds/Lightning/Lightning.tsx?raw'

export const lightning = {
  ...(generateCliCommands('Backgrounds/Lightning')),
  usage: `import Lightning from './Lightning';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Lightning
    hue={220}
    xOffset={0}
    speed={1}
    intensity={1}
    size={1}
  />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}