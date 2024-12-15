import React from 'react'
import { View } from 'react-native'
import type { ViewProps, ViewStyle } from 'react-native'
import { component, startWithType, mapProps, mapDefaultProps } from 'refun'
import { colorToString } from '../../colors'
import type { TPrimitiveShadow } from './types'

export type { TPrimitiveShadow } from './types'

export const PrimitiveShadow = component(
  startWithType<TPrimitiveShadow>(),
  mapDefaultProps({
    overflow: 0,
    offsetX: 0,
    offsetY: 0,
    blurRadius: 0,
    spreadRadius: 0,
  }),
  mapProps(({
    color,
    radius,
    overflow,
    blurRadius,
    spreadRadius,
  }) => {
    const shadowWidth = Math.max(blurRadius, spreadRadius)

    const style: ViewStyle = {
      flexDirection: 'row',
      position: 'absolute',
      left: -overflow,
      top: -overflow,
      right: -overflow,
      bottom: -overflow,
      borderTopWidth: shadowWidth,
      borderLeftWidth: shadowWidth,
      borderRightWidth: shadowWidth,
      borderBottomWidth: shadowWidth,
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      borderBottomLeftRadius: radius,
      borderColor: colorToString(color),
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

PrimitiveShadow.displayName = 'PrimitiveShadow'
