import { useEffect, useRef } from 'react';
import { Graph as G6Graph, treeToGraphData } from '@antv/g6';

const fetchDataAndRenderGraph = async (container: HTMLDivElement | null, graphRef: React.MutableRefObject<G6Graph | undefined>) => {
  if (!container) return;

  const response = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json');
  const data = await response.json();

  if (graphRef.current) {
    graphRef.current.destroy();
  }

  const graph = new G6Graph({
    container: container,
    autoFit: true,
    data: treeToGraphData(data),
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],
    defaultNode: {
      style: {
        labelText: (d: any) => d.id,
        labelBackground: true,
      },
      animation: {
        enter: false,
      },
    },
    layout: {
      type: 'dendrogram',
      radial: true,
      nodeSep: 40,
      rankSep: 140,
    },
  });

  await graph.render();
  graphRef.current = graph;
};

const DendrogramGraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<G6Graph>();

  useEffect(() => {
    fetchDataAndRenderGraph(containerRef.current, graphRef);

    return () => {
      if (graphRef.current) {
        graphRef.current.destroy();
        graphRef.current = undefined;
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '500px' }} />;
};

export default DendrogramGraph;
