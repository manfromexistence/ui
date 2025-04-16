import { BubbleBackground } from '@/registry/backgrounds/bubble-background';

export const BubbleBackgroundDemo = () => {
  return (
    <BubbleBackground
      interactive
      className="absolute inset-0 flex items-center justify-center rounded-xl"
    />
  );
};
