import React from 'react'
import { View } from 'react-native'
import type { ViewProps, ViewStyle } from 'react-native'
import { component, startWithType, mapProps, mapDefaultProps } from 'refun'
import { isNumber } from 'tsfn'
import { colorToString } from '../../colors'
import type { TPrimitiveBorder } from './types'

export type { TPrimitiveBorder } from './types'

export const PrimitiveBorder = component(
  startWithType<TPrimitiveBorder>(),
  mapDefaultProps({
    overflow: 0,
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
    const style: ViewStyle = {
      flexDirection: 'row',
      position: 'absolute',
      left: -overflow,
      top: -overflow,
      right: -overflow,
      bottom: -overflow,
      borderTopWidth: width,
      borderLeftWidth: width,
      borderRightWidth: width,
      borderBottomWidth: width,
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      borderBottomLeftRadius: radius,
      borderColor: colorToString(color),
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

    const props: ViewProps = {
      style,
      pointerEvents: 'none',
    }

    return props
  })
)((props) => (
  <View {...props}/>
))

PrimitiveBorder.displayName = 'PrimitiveBorder'
