import { G2Spec } from '../../../src';

export function penguinsPointRepeatMatrix(): G2Spec {
  return {
    type: 'repeatMatrix',
    width: 480,
    height: 480,
    paddingLeft: 50,
    paddingBottom: 50,
    data: {
      type: 'fetch',
      value: 'data/penguins.csv',
    },
    encode: {
      position: ['culmen_length_mm', 'culmen_depth_mm'],
    },
    children: [
      {
        type: 'point',
        encode: {
          color: 'species',
        },
      },
    ],
  };
}
