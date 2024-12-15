import React from 'react'
import type { TComponentConfig } from 'autoprops'
import { Block } from '@primitives/block'
import { Border } from '@primitives/border'
import type { TBorder } from '@primitives/border'
import type { TComponentControls } from '@revert/sandbox'
import { SYMBOL_CONTROL_SWITCH } from '@revert/sandbox'
import { setupBorderTheme } from './src'
import type { TThemeableBorders } from './src'

type TDemo = { status: 'default' | 'error' }

type Mappings = {
  demo: TDemo,
}

const defaultTheme: TThemeableBorders<Mappings> = {
  demo: ({ status }: { status: 'default' | 'error' }) => ({
    color: status === 'default' ? [0xF0, 0xF0, 0xF0, 1] : [0xFF, 0x99, 0x99, 1],
    bottomLeftRadius: 10,
    bottomRightRadius: 10,
    topLeftRadius: 10,
    topRightRadius: 10,
    topWidth: 2,
    bottomWidth: 2,
    leftWidth: 2,
    rightWidth: 2,
    overflowBottom: -4,
    overflowLeft: -4,
    overflowRight: -4,
    overflowTop: -4,
  }),
}

const { BorderTheme, createThemeableBorder } = setupBorderTheme()

const DemoThemeableBorder = createThemeableBorder<TBorder, Mappings>('demo', Border)

const newTheme: TThemeableBorders<Mappings> = {
  demo: ({ status }) => ({
    color: status === 'default' ? [0x00, 0x00, 0x00, 1] : [0xFF, 0x00, 0x00, 1],
    bottomLeftRadius: 10,
    bottomRightRadius: 10,
    topLeftRadius: 10,
    topRightRadius: 10,
    topWidth: 1,
    bottomWidth: 1,
    leftWidth: 1,
    rightWidth: 1,
    overflowBottom: -2,
    overflowLeft: -2,
    overflowRight: -2,
    overflowTop: -2,
  }),
}

type TDemoComponent = TDemo & { hasTheme: boolean}

export const Component = ({ status, hasTheme }: TDemoComponent) => (
  <Block
    style={{
      width: 100,
      height: 100,
    }}
  >
    <BorderTheme.Provider value={hasTheme ? newTheme : defaultTheme}>
      <DemoThemeableBorder status={status}/>
    </BorderTheme.Provider>
  </Block>
)

Component.displayName = 'ThemeableBorder'

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
