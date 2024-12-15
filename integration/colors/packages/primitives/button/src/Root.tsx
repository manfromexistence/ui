import React from 'react'
import { normalizeWebStyle } from 'stili'
import { component, startWithType, mapWithPropsMemo } from 'refun'
import type { TButton } from './types'

export const Button = component(
  startWithType<TButton>(),
  mapWithPropsMemo(({ isDisabled }) => ({
    styles: normalizeWebStyle({
      _webOnly: {
        appearance: 'none',
        backgroundColor: 'transparent',
        boxSizing: 'border-box',
        cursor: isDisabled ? 'auto' : 'pointer',
        outline: 0,
        userSelect: 'none',
        tapHighlightColor: 'rgba(255, 255, 255, 0)',
      },
      borderWidth: 0,
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      alignSelf: 'stretch',
      flexGrow: 1,
      flexShrink: 1,
      minWidth: 0,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,

    }),
  }), ['isDisabled'])
)(({
  id,
  accessibilityLabel,
  isDisabled,
  styles,
  onPointerEnter,
  onPointerLeave,
  onPress,
  onPressIn,
  onPressOut,
  onFocus,
  onBlur,
  children,
}) => (
  <button
    aria-label={accessibilityLabel}
    disabled={isDisabled}
    id={id}
    onClick={onPress}
    onMouseEnter={onPointerEnter}
    onMouseLeave={onPointerLeave}
    onMouseDown={onPressIn}
    onMouseUp={onPressOut}
    onFocus={onFocus}
    onBlur={onBlur}
    style={styles}
  >
    {children}
  </button>
))

Button.displayName = 'Button'
