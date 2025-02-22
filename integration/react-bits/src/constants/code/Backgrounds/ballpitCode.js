import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/Ballpit/Ballpit.jsx?raw';
import tailwind from '@tailwind/Backgrounds/Ballpit/Ballpit.jsx?raw';
import tsCode from '@ts-default/Backgrounds/Ballpit/Ballpit.tsx?raw';
import tsTailwind from '@ts-tailwind/Backgrounds/Ballpit/Ballpit.tsx?raw';

export const ballpit = {
  ...(generateCliCommands('Backgrounds/Ballpit')),
  installation: `npm i three`,
  usage: `import Ballpit from './Ballpit;'

<div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
  <Ballpit
    count={200}
    gravity={0.7}
    friction={0.8}
    wallBounce={0.95}
    followCursor={true}
  />
</div>`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}