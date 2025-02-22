import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/Dither/Dither.jsx?raw';
import css from '@content/Backgrounds/Dither/Dither.css?raw';
import tailwind from '@tailwind/Backgrounds/Dither/Dither.jsx?raw';
import tsCode from '@ts-default/Backgrounds/Dither/Dither.tsx?raw'
import tsTailwind from '@ts-tailwind/Backgrounds/Dither/Dither.tsx?raw'

export const dither = {
  ...(generateCliCommands('Backgrounds/Dither')),
  installation: `npm i three postprocessing @react-three/fiber @react-three/postprocessing`,
  usage: `import Dither from './Dither';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Dither
    waveColor={[0.5, 0.5, 0.5]}
    disableAnimation={false}
    enableMouseInteraction={true}
    mouseRadius={0.3}
    colorNum={4}
    waveAmplitude={0.3}
    waveFrequency={3}
    waveSpeed={0.05}
  />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}