import React from 'react'
import { TextInput } from 'react-native'
import type { TextStyle } from 'react-native'
import { component, mapWithProps, startWithType, mapHandlers, mapDefaultProps } from 'refun'
import { isNumber } from 'tsfn'
import { colorToString, isColor } from '../../colors'
import type { TPrimitiveInput } from './types'

export const PrimitiveInput = component(
  startWithType<TPrimitiveInput>(),
  mapDefaultProps({
    paddingTop: 0,
    paddingBottom: 0,
  }),
  mapHandlers({
    onChangeText: ({ onChange }) => (newValue: string) => onChange(newValue),
    onSubmitEditing: ({ onSubmit }) => () => {
      onSubmit?.()
    },
  }),
  mapWithProps(({
    color,
    letterSpacing,
    lineHeight,
    fontFamily,
    fontWeight,
    fontSize,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
  }) => {
    const style: TextStyle = {
      letterSpacing,
      lineHeight,
      fontFamily,
      fontSize,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
    }

    if (isNumber(fontWeight)) {
      style.fontWeight = String(fontWeight) as TextStyle['fontWeight']
    }

    if (isColor(color)) {
      style.color = colorToString(color)
    }

    return {
      style,
    }
  })
)(({
  id,
  accessibilityLabel,
  isDisabled,
  style,
  value,
  onChangeText,
  onSubmitEditing,
  onFocus,
  onBlur,
}) => (
  <TextInput
    testID={id}
    accessibilityLabel={accessibilityLabel}
    underlineColorAndroid="rgba(0,0,0,0)"
    textAlignVertical="center"
    caretHidden={isDisabled}
    editable={!isDisabled}
    style={style}
    value={value}
    onFocus={onFocus}
    onBlur={onBlur}
    onChangeText={onChangeText}
    onSubmitEditing={onSubmitEditing}
  />
))

PrimitiveInput.displayName = 'PrimitiveInput'
