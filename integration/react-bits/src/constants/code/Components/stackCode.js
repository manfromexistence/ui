import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/Stack/Stack.jsx?raw';
import css from '@content/Components/Stack/Stack.css?raw';
import tailwind from '@tailwind/Components/Stack/Stack.jsx?raw';
import tsCode from '@ts-default/Components/Stack/Stack.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/Stack/Stack.tsx?raw';

export const stack = {
  ...(generateCliCommands('Components/Stack')),
  installation: `npm i framer-motion`,
  usage: `import Stack from './Stack'

const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];
  
<Stack
  randomRotation={true}
  sensitivity={180}
  sendToBackOnClick={false}
  cardDimensions={{ width: 200, height: 200 }}
  cardsData={images}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}