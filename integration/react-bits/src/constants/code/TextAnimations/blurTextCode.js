import { generateCliCommands } from '@/utils/utils';

import code from '@content/TextAnimations/BlurText/BlurText.jsx?raw';
import tailwind from '@tailwind/TextAnimations/BlurText/BlurText.jsx?raw';
import tsCode from '@ts-default/TextAnimations/BlurText/BlurText.tsx?raw';
import tsTailwind from '@ts-tailwind/TextAnimations/BlurText/BlurText.tsx?raw';

export const blurText = {
  ...(generateCliCommands('TextAnimations/BlurText')),
  installation: `npm install @react-spring/web`,
  usage: `import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

<BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}