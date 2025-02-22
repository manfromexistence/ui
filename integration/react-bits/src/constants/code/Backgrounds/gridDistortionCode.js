import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/GridDistortion/GridDistortion.jsx?raw';
import css from '@content/Backgrounds/GridDistortion/GridDistortion.css?raw';
import tailwind from '@tailwind/Backgrounds/GridDistortion/GridDistortion.jsx?raw';
import tsCode from '@ts-default/Backgrounds/GridDistortion/GridDistortion.tsx?raw'
import tsTailwind from '@ts-tailwind/Backgrounds/GridDistortion/GridDistortion.tsx?raw'

export const gridDistortion = {
  ...(generateCliCommands('Backgrounds/GridDistortion')),
  installation: `npm i three`,
  usage: `import GridDistortion from './GridDistortion';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <GridDistortion
    imageSrc="https://picsum.photos/1920/1080?grayscale"
    grid={10}
    mouse={0.1}
    strength={0.15}
    relaxation={0.9}
    className="custom-class"
  />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}