import React from 'react'
import type { CSSProperties } from 'react'
import { component, mapWithProps, startWithType, mapHandlers } from 'refun'
import type { TPrimitiveSelect } from './types'

export const PrimitiveSelect = component(
  startWithType<TPrimitiveSelect>(),
  mapHandlers({
    onChange: ({ onChange }) => (event: any) => onChange(event.target.value),
  }),
  mapWithProps(({
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
  }) => {
    const styles: CSSProperties = {
      width: '100%',
      height: '100%',
      borderWidth: 0,
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      alignSelf: 'stretch',
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      boxSizing: 'border-box',
      textRendering: 'geometricPrecision',
      textSizeAdjust: 'none',
      appearance: 'none',
    }

    return {
      style: styles,
    }
  })
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
  onPointerEnter,
  onPointerLeave,
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
    onMouseEnter={onPointerEnter}
    onMouseLeave={onPointerLeave}
  >
    {children}
  </select>
))

PrimitiveSelect.displayName = 'PrimitiveSelect'
