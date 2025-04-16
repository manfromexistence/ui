import { generateCliCommands } from '@/utils/utils';

import code from '@content/TextAnimations/TextCursor/TextCursor.jsx?raw';
import css from '@content/TextAnimations/TextCursor/TextCursor.css?raw';
import tailwind from '@tailwind/TextAnimations/TextCursor/TextCursor.jsx?raw';
import tsCode from '@ts-default/TextAnimations/TextCursor/TextCursor.tsx?raw';
import tsTailwind from '@ts-tailwind/TextAnimations/TextCursor/TextCursor.tsx?raw';

export const textCursor = {
  ...(generateCliCommands('TextAnimations/TextCursor')),
  installation: `npm i framer-motion`,
  usage: `import TextCursor from './TextCursor';

<TextCursor
  text="Hello!"
  delay={0.01}
  spacing={80}
  followMouseDirection={true}
  randomFloat={true}
  exitDuration={0.3}
  removalInterval={20}
  maxPoints={10}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}