import React from 'react'
import type { HTMLProps, CSSProperties } from 'react'
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
    offsetX,
    offsetY,
  }) => {
    const style: CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      left: -overflow,
      top: -overflow,
      right: -overflow,
      bottom: -overflow,
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      borderBottomLeftRadius: radius,
      pointerEvents: 'none',
      boxShadow: `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${colorToString(color)}`,
    }

    const props: HTMLProps<HTMLDivElement> = {
      style,
    }

    return props
  })
)((props) => (
  <div {...props}/>
))

PrimitiveShadow.displayName = 'PrimitiveShadow'
