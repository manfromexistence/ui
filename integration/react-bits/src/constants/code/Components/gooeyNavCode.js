import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/GooeyNav/GooeyNav.jsx?raw';
import css from '@content/Components/GooeyNav/GooeyNav.css?raw';
import tailwind from '@tailwind/Components/GooeyNav/GooeyNav.jsx?raw';
import tsCode from '@ts-default/Components/GooeyNav/GooeyNav.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/GooeyNav/GooeyNav.tsx?raw';

export const gooeyNav = {
  ...(generateCliCommands('Components/GooeyNav')),
  usage: `import GooeyNav from './GooeyNav'

// update with your own items
const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

<div style={{ height: '600px', position: 'relative' }}>
  <GooeyNav
    items={items}
    animationTime={600}
    pCount={15}
    minDistance={20}
    maxDistance={42}
    maxRotate={75}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
    timeVariance={300}
  />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}