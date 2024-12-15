"use client";

import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';

const G2: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = new Chart({
      container: chartRef.current!,
      autoFit: true,
    });
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    chart
      .interval()
      .data(data)
      .encode('x', 'genre')
      .encode('y', 'sold')
      .encode('color', 'genre');

    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (<>
    <h1 className="text-primary">G2</h1>
    <div ref={chartRef} style={{ width: 500, height: 300 }} />
  </>)
};

export default G2;