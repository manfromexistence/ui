import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/PixelCard/PixelCard.jsx?raw';
import css from '@content/Components/PixelCard/PixelCard.css?raw';
import tailwind from '@tailwind/Components/PixelCard/PixelCard.jsx?raw';
import tsCode from "@ts-default/Components/PixelCard/PixelCard.tsx?raw";
import tsTailwind from "@ts-tailwind/Components/PixelCard/PixelCard.tsx?raw";

export const pixelCard = {
  ...(generateCliCommands('Components/PixelCard')),
  usage: `import PixelCard from './PixelCard';

<PixelCard variant="pink">
  // your card content (use position: absolute)
</PixelCard>
`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}