import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/DecayCard/DecayCard.jsx?raw';
import css from '@content/Components/DecayCard/DecayCard.css?raw';
import tailwind from '@tailwind/Components/DecayCard/DecayCard.jsx?raw';
import tsCode from '@ts-default/Components/DecayCard/DecayCard.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/DecayCard/DecayCard.tsx?raw';

export const decayCard = {
  ...(generateCliCommands('Components/DecayCard')),
  installation: `npm i gsap`,
  usage: `import DecayCard from './DecayCard';

<DecayCard width={200} height={300} image="https://picsum.photos/300/400?grayscale">
  <h2>Decay<br/>Card</h2>
</DecayCard>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}