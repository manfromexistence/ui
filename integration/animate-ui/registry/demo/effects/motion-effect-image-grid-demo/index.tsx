'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { MotionEffect } from '@/registry/effects/motion-effect';

export const MotionEffectImageGridDemo = () => {
  const isMobile = useIsMobile();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {Array.from({ length: isMobile ? 2 : 4 }).map((_, index) => (
        <MotionEffect
          key={index}
          slide={{
            direction: 'down',
          }}
          fade
          zoom
          inView
          delay={0.5 + index * 0.1}
        >
          <img
            src={`https://picsum.photos/seed/${index + 100}/600/400`}
            alt="Slide In Demo"
            className="w-[300px] h-[200px] object-cover object-center bg-muted rounded-xl flex items-center justify-center"
          />
        </MotionEffect>
      ))}
    </div>
  );
};
