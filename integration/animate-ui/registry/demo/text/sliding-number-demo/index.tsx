import { SlidingNumber } from '@/registry/text/sliding-number';

export const SlidingNumberDemo = () => {
  return (
    <SlidingNumber
      number={new Date().getFullYear()}
      padStart
      className="text-4xl"
    />
  );
};
