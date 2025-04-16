import { generateCliCommands } from '@/utils/utils';

import code from '@content/TextAnimations/RotatingText/RotatingText.jsx?raw';
import css from '@content/TextAnimations/RotatingText/RotatingText.css?raw';
import tailwind from '@tailwind/TextAnimations/RotatingText/RotatingText.jsx?raw';
import tsCode from '@ts-default/TextAnimations/RotatingText/RotatingText.tsx?raw';
import tsTailwind from '@ts-tailwind/TextAnimations/RotatingText/RotatingText.tsx?raw';


export const rotatingText = {
  ...(generateCliCommands('TextAnimations/RotatingText')),
  installation: `npm i framer-motion`,
  usage: `import RotatingText from './RotatingText'
  
<RotatingText
  texts={['React', 'Bits', 'Is', 'Cool!']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}