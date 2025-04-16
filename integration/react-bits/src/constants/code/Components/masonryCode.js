import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/Masonry/Masonry.jsx?raw';
import css from '@content/Components/Masonry/Masonry.css?raw';
import tailwind from '@tailwind/Components/Masonry/Masonry.jsx?raw';
import tsCode from '@ts-default/Components/Masonry/Masonry.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/Masonry/Masonry.tsx?raw';

export const masonry = {
  ...(generateCliCommands('Components/Masonry')),
  installation: `npm i @react-spring/web`,
  usage: `import Masonry from './Masonry'
  
const data = [
  { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 400 },
  { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300 },
  { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300 },
  { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
  { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 300 },
  { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
  { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
  { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
  { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 200 },
  { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 400 }
];

<Masonry data={data} />`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}