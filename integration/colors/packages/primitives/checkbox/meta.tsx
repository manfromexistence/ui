import type { TComponentControls } from '@revert/sandbox'
import { SYMBOL_CONTROL_SWITCH } from '@revert/sandbox'
import type { TComponentConfig } from 'autoprops'
import type { TCheckboxProps } from './src/types'

export const config: TComponentConfig<TCheckboxProps> = {
  props: {
    isChecked: [false, true],
    isDisabled: [true],
    accessibilityLabel: ['checkbox'],
    onToggle: [() => {}],
    onFocus: [() => {}],
    onBlur: [() => {}],
    onPointerEnter: [() => {}],
    onPointerLeave: [() => {}],
    onPressIn: [() => {}],
    onPressOut: [() => {}],
  },
  required: ['isChecked', 'onToggle'],
}

export { Checkbox as Component } from './src'

export { default as packageJson } from './package.json'

// @ts-ignore
export { default as readme } from './readme.md'

export const controls: TComponentControls<TCheckboxProps> = {
  isChecked: SYMBOL_CONTROL_SWITCH,
  isDisabled: SYMBOL_CONTROL_SWITCH,
}
