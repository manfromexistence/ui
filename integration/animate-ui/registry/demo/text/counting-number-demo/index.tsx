import { CountingNumber } from '@/registry/text/counting-number';

export const CountingNumberDemo = () => {
  return (
    <CountingNumber number={new Date().getFullYear()} className="text-4xl" />
  );
};
