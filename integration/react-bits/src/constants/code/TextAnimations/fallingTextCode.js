import { generateCliCommands } from '@/utils/utils';

import code from '@content/TextAnimations/FallingText/FallingText.jsx?raw';
import css from '@content/TextAnimations/FallingText/FallingText.css?raw';
import tailwind from '@tailwind/TextAnimations/FallingText/FallingText.jsx?raw';
import tsCode from '@ts-default/TextAnimations/FallingText/FallingText.tsx?raw';
import tsTailwind from '@ts-tailwind/TextAnimations/FallingText/FallingText.tsx?raw';

export const fallingText = {
  ...(generateCliCommands('TextAnimations/FallingText')),
  installation: `npm i matter-js

  //TS only
  npm i -D @types/matter-js`,
  usage: `import FallingText from './FallingText';
  
<FallingText
  text={\`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.\`}
  highlightWords={["React", "Bits", "animated", "components", "simplify"]}
  highlightClass="highlighted"
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.56}
  fontSize="2rem"
  mouseConstraintStiffness={0.9}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}