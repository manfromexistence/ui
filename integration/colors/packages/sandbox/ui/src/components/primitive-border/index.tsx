import React from 'react'
import type { CSSProperties, HTMLProps } from 'react'
import { component, startWithType, mapProps, mapDefaultProps } from 'refun'
import { isNumber } from 'tsfn'
import { colorToString } from '../../colors'
import type { TPrimitiveBorder } from './types'

export type { TPrimitiveBorder } from './types'

export const PrimitiveBorder = component(
  startWithType<TPrimitiveBorder>(),
  mapDefaultProps({
    overflow: 0,
    width: 0,
  }),
  mapProps(({
    color,
    width,
    leftWidth,
    topWidth,
    rightWidth,
    bottomWidth,
    radius,
    overflow,
  }) => {
    const style: CSSProperties = {
      pointerEvents: 'none',
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      left: -overflow,
      top: -overflow,
      right: -overflow,
      bottom: -overflow,
      borderColor: colorToString(color),
      borderStyle: 'solid',
      borderTopWidth: width,
      borderLeftWidth: width,
      borderRightWidth: width,
      borderBottomWidth: width,
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      borderBottomLeftRadius: radius,
    }

    if (isNumber(leftWidth)) {
      style.borderLeftWidth = leftWidth
    }

    if (isNumber(topWidth)) {
      style.borderTopWidth = topWidth
    }

    if (isNumber(rightWidth)) {
      style.borderRightWidth = rightWidth
    }

    if (isNumber(bottomWidth)) {
      style.borderBottomWidth = bottomWidth
    }

    const props: HTMLProps<HTMLDivElement> = {
      style,
    }

    return props
  })
)((props) => (
  <div {...props}/>
))

PrimitiveBorder.displayName = 'PrimitiveBorder'
