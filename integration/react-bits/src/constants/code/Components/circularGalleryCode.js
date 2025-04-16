import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/CircularGallery/CircularGallery.jsx?raw';
import css from '@content/Components/CircularGallery/CircularGallery.css?raw';
import tailwind from '@tailwind/Components/CircularGallery/CircularGallery.jsx?raw';
import tsCode from '@ts-default/Components/CircularGallery/CircularGallery.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/CircularGallery/CircularGallery.tsx?raw';

export const circularGallery = {
  ...(generateCliCommands('Components/CircularGallery')),
  installation: `npm install ogl`,
  usage: `import CircularGallery from './CircularGallery'

<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}