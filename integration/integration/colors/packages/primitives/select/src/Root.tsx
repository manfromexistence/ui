import React from 'react'
import { normalizeWebStyle } from 'stili'
import { component, mapWithProps, startWithType, mapHandlers } from 'refun'
import type { TSelect } from './types'

export const Select = component(
  startWithType<TSelect>(),
  mapHandlers({
    onChange: ({ onChange }) => (event: any) => onChange(event.target.value),
  }),
  mapWithProps(({
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
  }) => ({
    style: normalizeWebStyle({
      _webOnly: {
        maxWidth: '100%',
        boxSizing: 'border-box',
        fontSmoothing: 'antialiased',
        textRendering: 'geometricPrecision',
        textSizeAdjust: 'none',
        appearance: 'none',
      },
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 0,
      flexGrow: 1,
      flexShrink: 1,
      alignSelf: 'stretch',
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      minWidth: 0,
      opacity: 0,
    }),
  }))
)(({
  children,
  id,
  accessibilityLabel,
  isDisabled,
  style,
  value,
  onChange,
  onFocus,
  onBlur,
  onPressIn,
  onPressOut,
}) => (
  <select
    id={id}
    aria-label={accessibilityLabel}
    disabled={isDisabled}
    style={style}
    value={value}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onMouseDown={onPressIn}
    onMouseUp={onPressOut}
  >
    {children}
  </select>
))

Select.displayName = 'Select'
