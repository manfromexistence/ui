import React from 'react'
import { View } from 'react-native'
import { component, startWithType, mapWithProps } from 'refun'
import { normalizeNativeStyle } from 'stili'
import type { TTransformProps } from './types'

export const Transform = component(
  startWithType<TTransformProps>(),
  mapWithProps(({ x, y, rotate, scale }) => {
    const transform = []

    if (typeof x !== 'undefined') {
      transform.push({ translateX: x })
    }

    if (typeof y !== 'undefined') {
      transform.push({ translateY: y })
    }

    if (typeof scale !== 'undefined') {
      transform.push({ scale })
    }

    if (typeof rotate !== 'undefined') {
      transform.push({ rotate: `${rotate}deg` })
    }

    return {
      style: normalizeNativeStyle({
        flexDirection: 'row',
        flexGrow: 0,
        flexShrink: 0,
        alignSelf: 'flex-start',
        transform,
      }),
    }
  })
)(({ style, children }) => (
  <View style={style}>{children}</View>
))

Transform.displayName = 'Transform'
