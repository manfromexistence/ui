import React from 'react'
import type { CSSProperties } from 'react'
import { component, startWithType, mapWithPropsMemo } from 'refun'
import { TRANSPARENT, colorToString } from '../../colors'
import type { TPrimitiveButton } from './types'

export const PrimitiveButton = component(
  startWithType<TPrimitiveButton>(),
  mapWithPropsMemo(({ isDisabled }) => {
    const style: CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      alignSelf: 'stretch',
      borderWidth: 0,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      backgroundColor: colorToString(TRANSPARENT),
      textAlign: 'initial',
      cursor: isDisabled ? 'auto' : 'pointer',
      boxSizing: 'border-box',
      outline: 0,
      WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
      userSelect: 'none',
      appearance: 'none',
    }

    return {
      style,
    }
  }, ['isDisabled'])
)(({
  id,
  accessibilityLabel,
  isDisabled,
  style,
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
    style={style}
  >
    {children}
  </button>
))

PrimitiveButton.displayName = 'PrimitiveButton'
