import { generateCliCommands } from '@/utils/utils';

import code from '@content/Animations/ClickSpark/ClickSpark.jsx?raw';
import tailwind from '@tailwind/Animations/ClickSpark/ClickSpark.jsx?raw';
import tsCode from '@ts-default/Animations/ClickSpark/ClickSpark.tsx?raw'
import tsTailwind from "@ts-tailwind/Animations/ClickSpark/ClickSpark.tsx?raw";

export const clickSpark = {
  ...(generateCliCommands('Animations/ClickSpark')),
  usage: `import ClickSpark from './ClickSpark';

<ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  {/* Your content here */}
</ClickSpark>`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}