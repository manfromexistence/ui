import type { TComponentConfig } from 'autoprops'
import * as TextMeta from '@primitives/text/meta'
import type { TComponentControls } from '@revert/sandbox'
import { SYMBOL_CONTROL_SWITCH } from '@revert/sandbox'
import type { TButton } from './src/types'

export const config: TComponentConfig<TButton, 'text'> = {
  props: {
    isDisabled: [true],
    accessibilityLabel: ['button'],
    onPress: [() => {}],
  },
  children: {
    text: TextMeta,
  },
  // required: ['text'],
}

export { Button as Component } from './src'

export { default as packageJson } from './package.json'

// @ts-ignore
export { default as readme } from './readme.md'

export const controls: TComponentControls<TButton> = {
  isDisabled: SYMBOL_CONTROL_SWITCH,
}
