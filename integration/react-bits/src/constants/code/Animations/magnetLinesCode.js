import { generateCliCommands } from '@/utils/utils';

import code from '@content/Animations/MagnetLines/MagnetLines.jsx?raw';
import css from '@content/Animations/MagnetLines/MagnetLines.css?raw';
import tailwind from '@tailwind/Animations/MagnetLines/MagnetLines.jsx?raw';
import tsCode from '@ts-default/Animations/MagnetLines/MagnetLines.tsx?raw';
import tsTailwind from '@ts-tailwind/Animations/MagnetLines/MagnetLines.tsx?raw';

export const magnetLines = {
  ...(generateCliCommands('Animations/MagnetLines')),
  usage: `import MagnetLines from './MagnetLines';

<MagnetLines
  rows={9}
  columns={9}
  containerSize="60vmin"
  lineColor="tomato"
  lineWidth="0.8vmin"
  lineHeight="5vmin"
  baseAngle={0}
  style={{ margin: "2rem auto" }}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}