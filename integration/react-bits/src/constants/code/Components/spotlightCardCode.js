import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/SpotlightCard/SpotlightCard.jsx?raw';
import css from '@content/Components/SpotlightCard/SpotlightCard.css?raw';
import tailwind from '@tailwind/Components/SpotlightCard/SpotlightCard.jsx?raw';
import tsCode from '@ts-default/Components/SpotlightCard/SpotlightCard.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/SpotlightCard/SpotlightCard.tsx?raw';

export const spotlightCard = {
  ...(generateCliCommands('Components/SpotlightCard')),
  usage: `import SpotlightCard from './SpotlightCard';
  
<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
  // Content goes here
</SpotlightCard>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}