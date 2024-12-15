import React from 'react'
import { normalizeWebStyle } from 'stili'
import { component, startWithType, mapWithProps } from 'refun'
import { Block } from '@primitives/block'
import type { TCheckboxProps } from './types'

export const Checkbox = component(
  startWithType<TCheckboxProps>(),
  mapWithProps(({ isDisabled }) => ({
    style: normalizeWebStyle({
      _webOnly: {
        appearance: 'none',
        cursor: isDisabled ? 'auto' : 'pointer',
        height: '100%',
        width: '100%',
        tapHighlightColor: 'rgba(255, 255, 255, 0)',
      },
      left: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      opacity: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      position: 'absolute',
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
  onPointerEnter,
  onPointerLeave,
  onPressIn,
  onPressOut,
  onFocus,
  onBlur,
  children,
}) => (
  <Block shouldStretch>
    {children}
    <input
      type="checkbox"
      style={style}
      checked={isChecked}
      aria-label={accessibilityLabel}
      disabled={isDisabled}
      id={id}
      onChange={onToggle}
      onMouseEnter={onPointerEnter}
      onMouseLeave={onPointerLeave}
      onMouseDown={onPressIn}
      onMouseUp={onPressOut}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </Block>
))

Checkbox.displayName = 'Checkbox'
