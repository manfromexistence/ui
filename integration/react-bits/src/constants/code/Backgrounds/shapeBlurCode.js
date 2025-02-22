import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/ShapeBlur/ShapeBlur.jsx?raw';
import tailwind from '@tailwind/Backgrounds/ShapeBlur/ShapeBlur.jsx?raw';
import tsCode from '@ts-default/Backgrounds/ShapeBlur/ShapeBlur.tsx?raw';
import tsTailwind from '@ts-tailwind/Backgrounds/ShapeBlur/ShapeBlur.tsx?raw';

export const shapeBlur = {
  ...(generateCliCommands('Backgrounds/ShapeBlur')),
  installation: `npm i three`,
  usage: `import ShapeBlur from './ShapeBlur';

<div style={{position: 'relative', height: '500px', overflow: 'hidden'}}>
<ShapeBlur
  variation={0}
  pixelRatioProp={window.devicePixelRatio || 1}
  shapeSize={0.5}
  roundness={0.5}
  borderSize={0.05}
  circleSize={0.5}
  circleEdge={1}
/>
</div>`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}