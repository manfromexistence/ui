import { MotionEffect } from '@/registry/effects/motion-effect';

export const MotionEffectFadeBlurDemo = () => {
  return (
    <MotionEffect
      fade
      blur="10px"
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      inView
    >
      <p className="text-4xl font-bold">Motion Effect Fade Blur</p>
    </MotionEffect>
  );
};
