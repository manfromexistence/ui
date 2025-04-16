'use client';

import { FireworksBackground } from '@/registry/backgrounds/fireworks-background';

export default function FireworksBackgroundPopulationDemo() {
  return (
    <FireworksBackground
      className="absolute inset-0 flex items-center justify-center rounded-xl"
      population={8}
    />
  );
}
