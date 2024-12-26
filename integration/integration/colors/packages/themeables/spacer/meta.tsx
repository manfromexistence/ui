import React from 'react'
import type { TComponentConfig } from 'autoprops'
import { Block } from '@primitives/block'
import { Spacer } from '@primitives/spacer'
import type { TSpacer } from '@primitives/spacer'
import type { TComponentControls } from '@revert/sandbox'
import { SYMBOL_CONTROL_SWITCH } from '@revert/sandbox'
import { setupSpacerTheme } from './src'
import type { TThemeableSpacers } from './src'

type TDemo = { status: 'default' | 'error' }

type Mappings = {
  demo: TDemo,
}

const defaultTheme: TThemeableSpacers<Mappings> = {
  demo: ({ status }) => ({
    blockStart: status === 'error' ? 20 : 10,
    blockEnd: 10,
    inlineStart: status === 'error' ? 20 : 10,
    inlineEnd: 10,
  }),
}

const { SpacerTheme, createThemeableSpacer } = setupSpacerTheme()

export const DemoThemeableSpacer = createThemeableSpacer<TSpacer, Mappings>('demo', Spacer)

const newTheme: TThemeableSpacers<Mappings> = {
  demo: ({ status }) => ({
    blockStart: 10,
    blockEnd: status === 'error' ? 20 : 10,
    inlineStart: 10,
    inlineEnd: status === 'error' ? 20 : 10,
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
    <SpacerTheme.Provider value={hasTheme ? newTheme : defaultTheme}>
      <DemoThemeableSpacer status={status}/>
    </SpacerTheme.Provider>
  </Block>
)

Component.displayName = 'ThemeableSpacer'

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
