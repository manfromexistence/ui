'use client';

import { FireworksBackground } from '@/registry/backgrounds/fireworks-background';

export default function FireworksBackgroundSizeSpeedDemo() {
  return (
    <FireworksBackground
      className="absolute inset-0 flex items-center justify-center rounded-xl"
      fireworkSpeed={{ min: 8, max: 16 }}
      fireworkSize={{ min: 4, max: 10 }}
      particleSpeed={{ min: 4, max: 14 }}
      particleSize={{ min: 2, max: 10 }}
    />
  );
}
