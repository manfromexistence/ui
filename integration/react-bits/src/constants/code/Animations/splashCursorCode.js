import { generateCliCommands } from '@/utils/utils';

import code from '@content/Animations/SplashCursor/SplashCursor.jsx?raw';
import tailwind from '@tailwind/Animations/SplashCursor/SplashCursor.jsx?raw';
import tsCode from '@ts-default/Animations/SplashCursor/SplashCursor.tsx?raw';
import tsTailwind from '@ts-tailwind/Animations/SplashCursor/SplashCursor.tsx?raw';

export const splashCursor = {
  ...(generateCliCommands('Animations/SplashCursor')),
  usage: `import SplashCursor from './SplashCursor'

<SplashCursor />`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}