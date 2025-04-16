import { SlidingNumber } from '@/registry/text/sliding-number';

export const SlidingNumberDecimalDemo = () => {
  return (
    <SlidingNumber
      number={12345.67}
      decimalSeparator=","
      padStart
      className="text-4xl"
      inView
    />
  );
};
