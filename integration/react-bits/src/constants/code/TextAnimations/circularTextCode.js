import { generateCliCommands } from '@/utils/utils';

import code from '@content/TextAnimations/CircularText/CircularText.jsx?raw';
import css from '@content/TextAnimations/CircularText/CircularText.css?raw';
import tailwind from '@tailwind/TextAnimations/CircularText/CircularText.jsx?raw';
import tsCode from '@ts-default/TextAnimations/CircularText/CircularText.tsx?raw';
import tsTailwind from '@ts-tailwind/TextAnimations/CircularText/CircularText.tsx?raw';

export const circularText = {
  ...(generateCliCommands('TextAnimations/CircularText')),
  installation: `npm i framer-motion`,
  usage: `import CircularText from './CircularText';
  
<CircularText
  text="REACT*BITS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}