import { MotionEffect } from '@/registry/effects/motion-effect';

export const MotionEffectSlideDemo = () => {
  return (
    <MotionEffect slide inView>
      <p className="text-4xl font-bold">Motion Effect Slide</p>
    </MotionEffect>
  );
};
