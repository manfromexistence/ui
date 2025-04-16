import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/Counter/Counter.jsx?raw';
import css from '@content/Components/Counter/Counter.css?raw';
import tailwind from '@tailwind/Components/Counter/Counter.jsx?raw';
import tsCode from '@ts-default/Components/Counter/Counter.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/Counter/Counter.tsx?raw';

export const counter = {
  ...(generateCliCommands('Components/Counter')),
  installation: `npm i framer-motion`,
  usage: `import Counter from './Counter';

<Counter
  value={1}
  places={[100, 10, 1]}
  fontSize={80}
  padding={5}
  gap={10}
  textColor="white"
  fontWeight={900}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}