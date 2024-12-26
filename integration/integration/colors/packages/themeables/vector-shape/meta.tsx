import React from 'react'
import type { TComponentConfig } from 'autoprops'
import { VectorShape } from '@primitives/vector-shape'
import type { TVectorShape } from '@primitives/vector-shape'
import type { TComponentControls } from '@revert/sandbox'
import { SYMBOL_CONTROL_SWITCH } from '@revert/sandbox'
import { setupVectorShapeTheme } from './src'
import type { TThemeableVectorShapes } from './src'

type Mappings = {
  demo: { status: 'default' | 'error'},
}

const defaultTheme: TThemeableVectorShapes<Mappings> = {
  demo: ({ status }) => ({
    path: 'M30,0 L30,0 L0,15 L30,30 Z',
    width: 30,
    height: 30,
    color: status === 'default' ? [0x00, 0xFF, 0x00, 1] : [0x00, 0x00, 0xFF, 1],
  }),
}

const { VectorShapeTheme, createThemeableVectorShape } = setupVectorShapeTheme()

const DemoThemeableVectorShape = createThemeableVectorShape<TVectorShape, Mappings>('demo', VectorShape)

type TDemo = { status: 'default' | 'error' }

const newTheme: TThemeableVectorShapes<Mappings> = {
  demo: ({ status }) => ({
    path: 'M0,30 L0,30 L15,0 L30,30 Z',
    width: 30,
    height: 30,
    color: status === 'default' ? [0xFF, 0x00, 0x00, 1] : [0x00, 0x00, 0x00, 1],
  }),
}

type TDemoComponent = TDemo & { hasTheme: boolean}

export const Component = ({ status, hasTheme }: TDemoComponent) => (
  <VectorShapeTheme.Provider value={hasTheme ? newTheme : defaultTheme}>
    <DemoThemeableVectorShape status={status}/>
  </VectorShapeTheme.Provider>
)

Component.displayName = 'ThemeableVectorShape'

export const config: TComponentConfig<TDemoComponent> = {
  props: {
    hasTheme: [true],
    status: ['default', 'error'],
  },
}

// @ts-ignore
export { default as readme } from './readme.md'

export const controls: TComponentControls<TDemoComponent> = {
  hasTheme: SYMBOL_CONTROL_SWITCH,
}
