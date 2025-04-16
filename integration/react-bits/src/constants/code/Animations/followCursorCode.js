import { generateCliCommands } from '@/utils/utils';

import code from '@content/Animations/FollowCursor/FollowCursor.jsx?raw';
import css from '@content/Animations/FollowCursor/FollowCursor.css?raw';
import tailwind from '@tailwind/Animations/FollowCursor/FollowCursor.jsx?raw';
import tsCode from '@ts-default/Animations/FollowCursor/FollowCursor.tsx?raw';
import tsTailwind from '@ts-tailwind/Animations/FollowCursor/FollowCursor.tsx?raw';

export const followCursor = {
  ...(generateCliCommands('Animations/FollowCursor')),
  installation: `npm i @react-spring/web`,
  usage: `import FollowCursor from './FollowCursor'

<FollowCursor
  offsetX={20}
  cardWidth='200px'
  rotationFactor={40}
  enableTilt={true}
  animationConfig={{ mass: 5, tension: 350, friction: 40 }}
  wheelConfig={{ mass: 1, tension: 200, friction: 30 }}
>
  {/* Other content can go in here */}
</FollowCursor>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}