import { generateCliCommands } from '@/utils/utils';

import code from '@content/Animations/Noise/Noise.jsx?raw';
import css from '@content/Animations/Noise/Noise.css?raw';
import tailwind from '@tailwind/Animations/Noise/Noise.jsx?raw';
import tsCode from '@ts-default/Animations/Noise/Noise.tsx?raw';
import tsTailwind from '@ts-tailwind/Animations/Noise/Noise.tsx?raw';

export const noise = {
 
  ...(generateCliCommands('Animations/Noise')),

  usage: `import Noise from './Noise;'

<div style={{width: '600px', height: '400px', position: 'relative', overflow: 'hidden'}}>
  <Noise
    patternSize={250}
    patternScaleX={1}
    patternScaleY={1}
    patternRefreshInterval={2}
    patternAlpha={15}
  />
</div>`,

  code,
  css,
  tailwind,
  tsCode,
  tsTailwind,
};
