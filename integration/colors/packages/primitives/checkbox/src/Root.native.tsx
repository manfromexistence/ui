import React from 'react'
import { Switch, TouchableWithoutFeedback } from 'react-native'
import { normalizeNativeStyle } from 'stili'
import { component, mapWithProps, startWithType } from 'refun'
import { Block } from '@primitives/block'
import type { TCheckboxProps } from './types'

export const Checkbox = component(
  startWithType<TCheckboxProps>(),
  mapWithProps(() => ({
    style: normalizeNativeStyle({
      bottom: 0,
      left: 0,
      opacity: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    }),
  }))
)(({
  id,
  accessibilityLabel,
  isDisabled,
  isChecked,
  style,
  onToggle,
  onPressIn,
  onPressOut,
  children,
}) => (
  <TouchableWithoutFeedback
    accessibilityLabel={accessibilityLabel}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
    disabled={isDisabled}
  >
    <Block shouldStretch>
      {children}
      <Switch
        value={isChecked}
        disabled={isDisabled}
        testID={id}
        style={style}
        onValueChange={onToggle}
      />
    </Block>
  </TouchableWithoutFeedback>
))

Checkbox.displayName = 'Checkbox'
