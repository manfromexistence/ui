import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/Carousel/Carousel.jsx?raw';
import css from '@content/Components/Carousel/Carousel.css?raw';
import tailwind from '@tailwind/Components/Carousel/Carousel.jsx?raw';
import tsCode from '@ts-default/Components/Carousel/Carousel.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/Carousel/Carousel.tsx?raw';

export const carousel = {
  ...(generateCliCommands('Components/Carousel')),
  installation: `npm install framer-motion`,
  usage: `import Carousel from './Carousel'

<div style={{ height: '600px', position: 'relative' }}>
  <Carousel
    baseWidth={300}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false}
  />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}