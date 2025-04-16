'use client';

import * as React from 'react';

import { Counter } from '@/registry/components/counter';

export const CounterDemo = () => {
  const [number, setNumber] = React.useState(100);

  return <Counter number={number} setNumber={setNumber} />;
};
