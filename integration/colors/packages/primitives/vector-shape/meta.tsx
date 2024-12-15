import type { TComponentConfig } from 'autoprops'
import type { TVectorShape } from './src/types'

export const config: TComponentConfig<TVectorShape> = {
  props: {
    color: [
      [0xFF, 0x00, 0x00, 1],
      [0x00, 0xFF, 0x00, 1],
    ],
    path: [
      'M0,50 L0,50 L50,100 L100,50 L50,0 L0,50 Z',
      'M0,30 L0,30 L30,80 L80,30 L30,0 L0,30 Z',
    ],
    height: [100, 80],
    width: [100, 80],
    scale: [1, 2.2, 0.5],
  },
}

export { VectorShape as Component } from './src'

export { default as packageJson } from './package.json'

// :exclamation: need a quick review on this one. Loosening up the type on `ThemeableVectorShape` https://github.com/bubble-dev/_/pull/392
// This is necessary for some work on the radio component, but also it has caused Fernando (not `@` because he's off) some headaches too
