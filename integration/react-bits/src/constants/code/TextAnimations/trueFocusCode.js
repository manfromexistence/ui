import { generateCliCommands } from '@/utils/utils';

import code from '@content/TextAnimations/TrueFocus/TrueFocus.jsx?raw';
import css from '@content/TextAnimations/TrueFocus/TrueFocus.css?raw';
import tailwind from '@tailwind/TextAnimations/TrueFocus/TrueFocus.jsx?raw';
import tsCode from '@ts-default/TextAnimations/TrueFocus/TrueFocus.tsx?raw';
import tsTailwind from '@ts-tailwind/TextAnimations/TrueFocus/TrueFocus.tsx?raw';

export const trueFocus = {
  ...(generateCliCommands('TextAnimations/TrueFocus')),
  installation: `npm i framer-motion`,
  usage: `import TrueFocus from './TrueFocus';

<TrueFocus 
sentence="True Focus"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}