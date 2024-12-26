import React from 'react'
import type { KeyboardEvent, CSSProperties } from 'react'
import { component, mapWithProps, startWithType, mapHandlers } from 'refun'
import { isNumber } from 'tsfn'
import { colorToString, isColor } from '../../colors'
import type { TPrimitiveInput } from './types'

export const PrimitiveInput = component(
  startWithType<TPrimitiveInput>(),
  mapHandlers({
    onChange: ({ onChange }) => (e: any) => onChange(e.target.value),
    onKeyPress: ({ onSubmit }) => (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSubmit?.()
      }
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
    const style: CSSProperties = {
      textRendering: 'geometricPrecision',
      textSizeAdjust: 'none',
      appearance: 'none',
      boxSizing: 'border-box',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 0,
      fontFamily,
      fontWeight,
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

    if (isColor(color)) {
      style.color = colorToString(color)
    }

    if (isNumber(letterSpacing)) {
      style.letterSpacing = letterSpacing
    }

    if (isNumber(lineHeight)) {
      style.lineHeight = `${lineHeight}px`
    }

    return {
      style,
    }
  })
)(({
  id,
  accessibilityLabel,
  style,
  value,
  isDisabled,
  onChange,
  onKeyPress,
  onFocus,
  onBlur,
  onPressIn,
  onPressOut,
  onPointerEnter,
  onPointerLeave,
}) => (
  <input
    id={id}
    aria-label={accessibilityLabel}
    disabled={isDisabled}
    style={style}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    onFocus={onFocus}
    onBlur={onBlur}
    onMouseDown={onPressIn}
    onMouseUp={onPressOut}
    onMouseEnter={onPointerEnter}
    onMouseLeave={onPointerLeave}
  />
))

PrimitiveInput.displayName = 'PrimitiveInput'
