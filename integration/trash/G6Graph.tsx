import React, { useEffect, useRef } from 'react';
import type { GraphOptions } from '@antv/g6';
import { Graph as G6Graph } from '@antv/g6';

export interface GraphProps {
  options: Omit<GraphOptions, 'container'>;
  onRender?: (graph: G6Graph) => void;
  onDestroy?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Graph = (props: GraphProps) => {
  const { 
    options, 
    onRender, 
    onDestroy, 
    className, 
    style 
  } = props;

  const graphRef = useRef<G6Graph>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      const graph = new G6Graph({
        container: containerRef.current,
        ...options
      });
      
      graphRef.current = graph;

      const renderGraph = async () => {
        try {
          await graph.render();
          onRender?.(graph);
        } catch (error) {
          console.error('G6 Graph Render Error:', error);
        }
      };

      renderGraph();

      return () => {
        const currentGraph = graphRef.current;
        if (currentGraph) {
          currentGraph.destroy();
          onDestroy?.();
          graphRef.current = undefined;
        }
      };
    }
  }, [options, onRender, onDestroy]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ 
        width: '100%', 
        height: '400px', 
        ...style 
      }} 
    />
  );
};