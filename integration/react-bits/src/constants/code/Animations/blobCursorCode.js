import { generateCliCommands } from '@/utils/utils';

import code from '@content/Animations/BlobCursor/BlobCursor.jsx?raw';
import css from '@content/Animations/BlobCursor/BlobCursor.css?raw';
import tailwind from '@tailwind/Animations/BlobCursor/BlobCursor.jsx?raw';
import tsCode from '@ts-default/Animations/BlobCursor/BlobCursor.tsx?raw';
import tsTailwind from "@ts-tailwind/Animations/BlobCursor/BlobCursor.tsx?raw";

export const blobCursor = {
  ...(generateCliCommands('Animations/BlobCursor')),
  installation: `npm i @react-spring/web`,
  usage: `import BlobCursor from './BlobCursor'
  
<BlobCursor />`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}