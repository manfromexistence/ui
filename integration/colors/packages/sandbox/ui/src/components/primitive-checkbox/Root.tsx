import React from 'react'
import type { CSSProperties } from 'react'
import { component, startWithType, mapWithPropsMemo } from 'refun'
import { PrimitiveBlock } from '../primitive-block'
import type { TPrimitiveCheckbox } from './types'

export const PrimitiveCheckbox = component(
  startWithType<TPrimitiveCheckbox>(),
  mapWithPropsMemo(({ isDisabled }) => {
    const style: CSSProperties = {
      appearance: 'none',
      cursor: isDisabled ? 'auto' : 'pointer',
      WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      top: 0,
      left: 0,
      opacity: 0,
    }

    return {
      style,
    }
  }, ['isDisabled'])
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
  <PrimitiveBlock left={0} top={0} right={0} bottom={0}>
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
  </PrimitiveBlock>
))

PrimitiveCheckbox.displayName = 'PrimitiveCheckbox'
