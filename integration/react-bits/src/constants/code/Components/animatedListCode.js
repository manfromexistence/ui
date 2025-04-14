import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/AnimatedList/AnimatedList.jsx?raw';
import css from '@content/Components/AnimatedList/AnimatedList.css?raw';
import tailwind from '@tailwind/Components/AnimatedList/AnimatedList.jsx?raw';
import tsCode from "@ts-default/Components/AnimatedList/AnimatedList.tsx?raw";
import tsTailwind from "@ts-tailwind/Components/AnimatedList/AnimatedList.tsx?raw";

export const animatedList = {
  ...(generateCliCommands('Components/AnimatedList')),
  installation: `npm i framer-motion`,
  usage: `import AnimatedList from './AnimatedList'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']; 
  
<AnimatedList
  items={items}
  onItemSelect={(item, index) => console.log(item, index)}
  showGradients={true}
  enableArrowNavigation={true}
  displayScrollbar={true}
/>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}