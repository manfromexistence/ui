'use client';

import { FireworksBackground } from '@/registry/backgrounds/fireworks-background';

export default function FireworksBackgroundFixSizeSpeedDemo() {
  return (
    <FireworksBackground
      className="absolute inset-0 flex items-center justify-center rounded-xl"
      fireworkSize={7}
      fireworkSpeed={7}
      particleSize={7}
      particleSpeed={7}
    />
  );
}
