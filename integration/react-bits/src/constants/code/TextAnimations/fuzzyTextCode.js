import { generateCliCommands } from '@/utils/utils';

import code from '@content/TextAnimations/FuzzyText/FuzzyText.jsx?raw';
import tailwind from '@tailwind/TextAnimations/FuzzyText/FuzzyText.jsx?raw';
import tsCode from '@ts-default/TextAnimations/FuzzyText/FuzzyText.tsx?raw';
import tsTailwind from '@ts-tailwind/TextAnimations/FuzzyText/FuzzyText.tsx?raw';

export const fuzzyText = {
  ...(generateCliCommands('TextAnimations/FuzzyText')),
  usage: `import FuzzyText from './FuzzyText';
  
<FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={hoverIntensity} 
  enableHover={enableHover}
>
  404
</FuzzyText>`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}