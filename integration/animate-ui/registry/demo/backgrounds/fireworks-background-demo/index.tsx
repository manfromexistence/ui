'use client';

import { FireworksBackground } from '@/registry/backgrounds/fireworks-background';
import { useTheme } from 'next-themes';
export default function FireworksBackgroundDemo() {
  const { resolvedTheme: theme } = useTheme();

  return (
    <FireworksBackground
      className="absolute inset-0 flex items-center justify-center rounded-xl"
      color={theme === 'dark' ? 'white' : 'black'}
    />
  );
}
