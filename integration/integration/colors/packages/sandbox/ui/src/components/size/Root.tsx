import React from 'react'
import type { CSSProperties } from 'react'
import { component, startWithType, mapWithPropsMemo, mapRef } from 'refun'
import { isFunction, isNumber } from 'tsfn'
import { onLayout } from '../on-layout'
import { round } from './round'
import type { TSize } from './types'

export const Size = component(
  startWithType<TSize>(),
  mapWithPropsMemo(({ left, top, maxWidth, maxHeight, shouldPreventWrap }) => {
    const parentStyle: CSSProperties = {
      display: 'flex',
      left: 0,
      top: 0,
      position: 'absolute',
    }
    const childStyle: CSSProperties = {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
    }

    if (isNumber(left)) {
      parentStyle.left = left
    }

    if (isNumber(top)) {
      parentStyle.top = top
    }

    if (isNumber(maxWidth) && maxWidth > 0) {
      childStyle.maxWidth = maxWidth
    }

    if (isNumber(maxHeight) && maxHeight > 0) {
      childStyle.maxHeight = maxHeight
    }

    if (shouldPreventWrap) {
      childStyle.display = 'flex'
    }

    return {
      parentStyle,
      childStyle,
    }
  }, ['maxWidth', 'maxHeight', 'left', 'top', 'shouldPreventWrap']),
  mapRef('ref', null as null | HTMLDivElement),
  onLayout(({ ref, width, height, onWidthChange, onHeightChange }) => {
    if (ref.current === null) {
      return
    }

    const shouldMeasureWidth = isNumber(width) && isFunction(onWidthChange)
    const shouldMeasureHeight = isNumber(height) && isFunction(onHeightChange)

    if (shouldMeasureWidth || shouldMeasureHeight) {
      const rect = ref.current.firstElementChild!.getBoundingClientRect()

      const measuredWidth = round(rect.width)
      const measuredHeight = round(rect.height)

      if (shouldMeasureWidth && width !== measuredWidth) {
        onWidthChange!(measuredWidth)
      }

      if (shouldMeasureHeight && height !== measuredHeight) {
        onHeightChange!(measuredHeight)
      }
    }
  })
)(({ ref, parentStyle, childStyle, children }) => (
  <div style={parentStyle}>
    <div style={childStyle} ref={ref}>
      {children}
    </div>
  </div>
))

Size.displayName = 'Size'
