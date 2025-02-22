import { generateCliCommands } from '@/utils/utils';

import code from '@content/TextAnimations/ASCIIText/ASCIIText.jsx?raw';
import tsCode from '@ts-default/TextAnimations/ASCIIText/ASCIIText.tsx?raw';
import tsTailwind from '@ts-tailwind/TextAnimations/ASCIIText/ASCIIText.tsx?raw';

export const asciiText = {
  ...(generateCliCommands('TextAnimations/ASCIIText')),
  installation: `npm i three`,
  usage: `import ASCIIText from './ASCIIText';
<ASCIIText
  text='hello_world'
  enableWaves={true}
  asciiFontSize={8}
/>`,
  code,
  tailwind: code,
  tsCode,
  tsTailwind,
}