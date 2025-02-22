import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/Squares/Squares.jsx?raw';
import css from '@content/Backgrounds/Squares/Squares.css?raw';
import tailwind from '@tailwind/Backgrounds/Squares/Squares.jsx?raw';
import tsCode from '@ts-default/Backgrounds/Squares/Squares.tsx?raw';
import tsTailwind from '@ts-tailwind/Backgrounds/Squares/Squares.tsx?raw';

export const squares = {
  ...(generateCliCommands('Backgrounds/Squares')),
  usage: `import Squares from './Squares';
  
<Squares 
speed={0.5} 
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind,
};
