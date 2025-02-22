import { generateCliCommands } from '@/utils/utils';

import code from '../../../content/Animations/Magnet/Magnet.jsx?raw';
import tailwind from '@tailwind/Animations/Magnet/Magnet.jsx?raw';
import tsCode from '@ts-default/Animations/Magnet/Magnet.tsx?raw';
import tsTailwind from '@ts-tailwind/Animations/Magnet/Magnet.tsx?raw';

export const magnet = {
  ...(generateCliCommands('Animations/Magnet')),
  usage: `import Magnet from './Magnet'

<Magnet padding={50} disabled={false} magnetStrength={50}>
  <p>Star React Bits on GitHub!</p>
</Magnet>`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}