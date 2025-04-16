import { generateCliCommands } from '@/utils/utils';

import code from '@content/Animations/AnimatedContent/AnimatedContent.jsx?raw';
import tailwind from '@tailwind/Animations/AnimatedContent/AnimatedContent.jsx?raw';
import tsCode from '@ts-default/Animations/AnimatedContent/AnimatedContent.tsx?raw';
import tsTailwind from '@ts-tailwind/Animations/AnimatedContent/AnimatedContent.tsx?raw';

export const animatedContent = {
  ...(generateCliCommands('Animations/AnimatedContent')),
  installation: `npm install @react-spring/web`,
  usage: `import AnimatedContent from './AnimatedContent'

<AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>
  <div>Content to Animate</div>
</AnimatedContent>`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}