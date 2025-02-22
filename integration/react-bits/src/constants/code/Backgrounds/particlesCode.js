import { generateCliCommands } from '@/utils/utils';

import code from '@content/Backgrounds/Particles/Particles.jsx?raw';
import css from '@content/Backgrounds/Particles/Particles.css?raw';
import tailwind from '@tailwind/Backgrounds/Particles/Particles.jsx?raw';
import tsCode from '@ts-default/Backgrounds/Particles/Particles.tsx?raw';
import tsTailwind from '@ts-tailwind/Backgrounds/Particles/Particles.tsx?raw';

export const particles = {
  ...(generateCliCommands('Backgrounds/Particles')),
  installation: `npm i ogl`,
  usage: `import Particles from './Particles';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind,
};
