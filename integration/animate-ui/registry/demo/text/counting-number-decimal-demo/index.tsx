import { CountingNumber } from '@/registry/text/counting-number';

export const CountingNumberDecimalDemo = () => {
  return (
    <CountingNumber
      number={12345.67}
      decimalPlaces={2}
      decimalSeparator=","
      className="text-4xl"
      inView
    />
  );
};
