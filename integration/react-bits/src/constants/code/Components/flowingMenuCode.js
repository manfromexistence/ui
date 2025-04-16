import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/FlowingMenu/FlowingMenu.jsx?raw';
import css from '@content/Components/FlowingMenu/FlowingMenu.css?raw';
import tailwind from '@tailwind/Components/FlowingMenu/FlowingMenu.jsx?raw';
import tsCode from '@ts-default/Components/FlowingMenu/FlowingMenu.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/FlowingMenu/FlowingMenu.tsx?raw';

export const flowingMenu = {
  ...(generateCliCommands('Components/FlowingMenu')),
  installation: `npm install gsap`,
  usage: `import FlowingMenu from './FlowingMenu'

const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

<div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}