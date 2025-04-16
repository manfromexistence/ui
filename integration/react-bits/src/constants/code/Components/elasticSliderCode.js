import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/ElasticSlider/ElasticSlider.jsx?raw';
import css from '@content/Components/ElasticSlider/ElasticSlider.css?raw';
import tailwind from '@tailwind/Components/ElasticSlider/ElasticSlider.jsx?raw';
import tsCode from "@ts-default/Components/ElasticSlider/ElasticSlider.tsx?raw"
import tsTailwind from "@ts-tailwind/Components/ElasticSlider/ElasticSlider.tsx?raw"

export const elasticSlider = {
  ...(generateCliCommands('Components/ElasticSlider')),
  installation: `npm i framer-motion`,
  usage: `import ElasticSlider from './ElasticSlider'
  
<ElasticSlider
  leftIcon={<>...your icon...</>}
  rightIcon={<>...your icon...</>}
  startingValue={500}
  defaultValue={750}
  maxValue={1000}
  isStepped
  stepSize={10}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}