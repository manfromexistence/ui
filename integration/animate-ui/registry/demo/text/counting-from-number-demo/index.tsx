import { CountingNumber } from '@/registry/text/counting-number';

export const CountingFromNumberDemo = () => {
  return (
    <CountingNumber
      number={0}
      fromNumber={new Date().getFullYear()}
      className="text-4xl"
      inView
    />
  );
};
