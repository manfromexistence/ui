import { generateCliCommands } from '@/utils/utils';

import code from '@content/TextAnimations/ScrollFloat/ScrollFloat.jsx?raw';
import css from '@content/TextAnimations/ScrollFloat/ScrollFloat.css?raw';
import tailwind from '@tailwind/TextAnimations/ScrollFloat/ScrollFloat.jsx?raw';
import tsCode from '@ts-default/TextAnimations/ScrollFloat/ScrollFloat.tsx?raw';
import tsTailwind from '@ts-tailwind/TextAnimations/ScrollFloat/ScrollFloat.tsx?raw';

export const scrollFloat = {
  ...(generateCliCommands('TextAnimations/ScrollFloat')),
  installation: `npm i gsap`,
  usage: `import ScrollFloat from './ScrollFloat';

<ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
>
  reactbits
</ScrollFloat>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}