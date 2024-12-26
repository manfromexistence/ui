import React from 'react'
import type { TComponentConfig } from 'autoprops'
import { Paragraph } from '@primitives/paragraph'
import type { TParagraph } from '@primitives/paragraph'
import type { TComponentControls } from '@revert/sandbox'
import { SYMBOL_CONTROL_SWITCH } from '@revert/sandbox'
import { setupTextAlignTheme } from './src'
import type { TThemeableTextAligns } from './src'

type Mappings = {
  demo: {},
}

const defaultTheme: TThemeableTextAligns<Mappings> = {
  demo: () => ({
    align: 'start',
    direction: 'left-to-right',
  }),
}

const { TextAlignTheme, createThemeableTextAlign } = setupTextAlignTheme()

const DemoThemeableTextAlign = createThemeableTextAlign<TParagraph, Mappings>('demo', Paragraph)

const newTheme: TThemeableTextAligns<Mappings> = {
  demo: () => ({
    align: 'start',
    direction: 'right-to-left',
  }),
}

const text = 'Cat is love, cat is life fall asleep on the washing machine. Gnaw the corn cob. Meow to be let in cat walks in keyboard destroy couch as revenge.'

type TDemoComponent = { hasTheme: boolean }

export const Component = ({ hasTheme }: TDemoComponent) => (
  <TextAlignTheme.Provider value={hasTheme ? newTheme : defaultTheme}>
    <DemoThemeableTextAlign>
      { text }
    </DemoThemeableTextAlign>
  </TextAlignTheme.Provider>
)

Component.displayName = 'ThemeableTextAlign'

export const config: TComponentConfig<TDemoComponent> = {
  props: {
    hasTheme: [true],
  },
}

export { default as packageJson } from './package.json'

// @ts-ignore
export { default as readme } from './readme.md'

export const controls: TComponentControls<TDemoComponent> = {
  hasTheme: SYMBOL_CONTROL_SWITCH,
}
