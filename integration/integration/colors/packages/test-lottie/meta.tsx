import type { TComponentControls } from '@revert/sandbox'
import { SYMBOL_CONTROL_SWITCH } from '@revert/sandbox'
import type { TComponentConfig } from 'autoprops'

export const config: TComponentConfig<{}> = {
  props: {},
}

export { TestLottie as Component } from './src'

export { default as packageJson } from './package.json'

// @ts-ignore
export { default as readme } from './readme.md'

export const controls: TComponentControls<{}> = {
  hasTheme: SYMBOL_CONTROL_SWITCH,
}
