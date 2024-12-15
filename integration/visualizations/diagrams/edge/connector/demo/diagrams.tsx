"use client"
import type { GraphOptions } from '@antv/g6';
import { Graph as G6Graph} from '@antv/g6';
import { useEffect, useRef } from 'react';

export interface GraphProps {
  options: GraphOptions;
  onRender?: (graph: G6Graph) => void;
  onDestroy?: () => void;
}

export default function Diagrams(props: GraphProps) {
  const { options, onRender, onDestroy } = props;
  const graphRef = useRef<G6Graph>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const graph = new G6Graph({ container: containerRef.current! });
    graphRef.current = graph;

    return () => {
      const graph = graphRef.current;
      if (graph) {
        graph.destroy();
        onDestroy?.();
        graphRef.current = undefined;
      }
    };
  }, [onDestroy]);

  useEffect(() => {
    const container = containerRef.current;
    const graph = graphRef.current;

    if (!options || !container || !graph || graph.destroyed) return;

    graph.setOptions(options);
    graph
      .render()
      .then(() => onRender?.(graph))
      // eslint-disable-next-line no-console
      .catch((error: any) => console.debug(error));
  }, [onRender, options]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

// export interface GraphProps {
//     options: GraphOptions;
//     onRender?: (graph: G6Graph) => void;
//     onDestroy?: () => void;
// }

// export default function Diagrams(props: GraphProps) {
//     const containerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//       const graph = new Graph({
//         container: containerRef.current!,
//         width: 500,
//         height: 500,
//         edges: {
//           nodes: [
//             {
//               id: 'node-1',
//               style: { x: 50, y: 100 },
//             },
//             {
//               id: 'node-2',
//               style: { x: 150, y: 100 },
//             },
//           ],
//           edges: [{ id: 'edge-1', source: 'node-1', target: 'node-2' }],
//         },
//       });
  
//       graph.render();
//     }, []);
//     // const { options, onRender, onDestroy } = props;
//     // const graphRef = useRef<G6Graph>();
//     // const containerRef = useRef<HTMLDivElement>(null);

//     // useEffect(() => {
//     //     const graph = new G6Graph({ container: containerRef.current! });
//     //     graphRef.current = graph;

//     //     return () => {
//     //         const graph = graphRef.current;
//     //         if (graph) {
//     //             graph.destroy();
//     //             onDestroy?.();
//     //             graphRef.current = undefined;
//     //         }
//     //     };
//     // }, [onDestroy]);

//     // useEffect(() => {
//     //     const container = containerRef.current;
//     //     const graph: G6Graph = graphRef.current;

//     //     if (!options || !container || !graph || graph.destroyed) return;

//     //     graph.setOptions(options);
//     //     graph
//     //         .render()
//     //         .then(() => onRender?.(graph))
//     //         // eslint-disable-next-line no-console
//     //         .catch((error: any) => console.debug(error));
//     // }, [onRender, options]);

//     return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
// };