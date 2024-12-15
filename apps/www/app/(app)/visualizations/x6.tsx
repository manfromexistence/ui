"use client";

import React, { useRef, useEffect } from 'react';
import { Graph } from '@antv/x6';

const X6 = () => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const graph = new Graph({
      container: containerRef.current,
      width: 500,
      height: 500,
      background: {
        color: '#F2F7FA',
      },
      grid: {
        visible: true,
        type: 'doubleMesh',
        args: [
          {
            color: '#eee', // 主网格线颜色
            thickness: 1, // 主网格线宽度
          },
          {
            color: '#ddd', // 次网格线颜色
            thickness: 1, // 次网格线宽度
            factor: 4, // 主次网格线间隔
          },
        ],
      },
    });

    graph.fromJSON({
      nodes: [
        {
          id: 'node1',
          shape: 'rect',
          x: 40,
          y: 40,
          width: 100,
          height: 40,
          label: 'hello',
          attrs: {
            body: {
              stroke: '#8f8f8f',
              strokeWidth: 1,
              fill: '#fff',
              rx: 6,
              ry: 6,
            },
          },
        },
        {
          id: 'node2',
          shape: 'rect',
          x: 160,
          y: 180,
          width: 100,
          height: 40,
          label: 'world',
          attrs: {
            body: {
              stroke: '#8f8f8f',
              strokeWidth: 1,
              fill: '#fff',
              rx: 6,
              ry: 6,
            },
          },
        },
      ],
      edges: [
        {
          shape: 'edge',
          source: 'node1',
          target: 'node2',
          label: 'x6',
          attrs: {
            line: {
              stroke: '#8f8f8f',
              strokeWidth: 1,
            },
          },
        },
      ],
    });

    graph.centerContent();

  }, []);

  return <>
    <span>X6</span>
    <div ref={containerRef} />
  </>;
};

export default X6;