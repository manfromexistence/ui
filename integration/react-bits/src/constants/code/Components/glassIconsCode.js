import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/GlassIcons/GlassIcons.jsx?raw';
import css from '@content/Components/GlassIcons/GlassIcons.css?raw';
import tailwind from '@tailwind/Components/GlassIcons/GlassIcons.jsx?raw';
import tsCode from '@ts-default/Components/GlassIcons/GlassIcons.tsx?raw';
import tsTailwind from '@ts-tailwind/Components/GlassIcons/GlassIcons.tsx?raw';

export const glassIcons = {
  ...(generateCliCommands('Components/GlassIcons')),
  usage: `import GlassIcons from './GlassIcons'

// update with your own icons and colors
const items = [
  { icon: <FiFileText />, color: 'blue', label: 'Files' },
  { icon: <FiBook />, color: 'purple', label: 'Books' },
  { icon: <FiHeart />, color: 'red', label: 'Health' },
  { icon: <FiCloud />, color: 'indigo', label: 'Weather' },
  { icon: <FiEdit />, color: 'orange', label: 'Notes' },
  { icon: <FiBarChart2 />, color: 'green', label: 'Stats' },
];

<div style={{ height: '600px', position: 'relative' }}>
  <GlassIcons items={items} className="custom-class"/>
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}