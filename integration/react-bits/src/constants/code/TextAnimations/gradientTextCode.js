import { generateCliCommands } from '@/utils/utils';

import code from '@content/TextAnimations/GradientText/GradientText.jsx?raw';
import css from '@content/TextAnimations/GradientText/GradientText.css?raw';
import tailwind from '@tailwind/TextAnimations/GradientText/GradientText.jsx?raw';
import tsCode from '@ts-default/TextAnimations/GradientText/GradientText.tsx?raw';
import tsTailwind from '@ts-tailwind/TextAnimations/GradientText/GradientText.tsx?raw';


export const gradientText = {
  ...(generateCliCommands('TextAnimations/GradientText')),
  usage: `import GradientText from './GradientText'
  
<GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Add a splash of color!
</GradientText>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}