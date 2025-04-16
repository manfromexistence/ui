import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/InfiniteScroll/InfiniteScroll.jsx?raw';
import css from '@content/Components/InfiniteScroll/InfiniteScroll.css?raw';
import tailwind from '@tailwind/Components/InfiniteScroll/InfiniteScroll.jsx?raw';
import tsCode from '@ts-default/Components/InfiniteScroll/InfiniteScroll.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/InfiniteScroll/InfiniteScroll.tsx?raw';

export const infiniteScroll = {
  ...(generateCliCommands('Components/InfiniteScroll')),
  installation: `npm i gsap`,
  usage: `import InfiniteScroll from './InfiniteScroll';
  
const items = [
  { content: "Text Item 1" },
  { content: <p>Paragraph Item 2</p> },
  { content: "Text Item 3" },
  { content: <p>Paragraph Item 4</p> },
  { content: "Text Item 5" },
  { content: <p>Paragraph Item 6</p> },
  { content: "Text Item 7" },
  { content: <p>Paragraph Item 8</p> },
  { content: "Text Item 9" },
  { content: <p>Paragraph Item 10</p> },
  { content: "Text Item 11" },
  { content: <p>Paragraph Item 12</p> },
  { content: "Text Item 13" },
  { content: <p>Paragraph Item 14</p> },
];
  
<div style={{height: '500px', position: 'relative'}}>
  <InfiniteScroll
    items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={0.1}
    autoplayDirection="down"
    pauseOnHover={true}
  />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}