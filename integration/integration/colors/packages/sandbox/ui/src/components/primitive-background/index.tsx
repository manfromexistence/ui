import React from 'react'
import type { HTMLProps, CSSProperties } from 'react'
import { component, startWithType, mapProps, mapDefaultProps } from 'refun'
import { colorToString } from '../../colors'
import type { TPrimitiveBackground } from './types'

export type { TPrimitiveBackground } from './types'

export const PrimitiveBackground = component(
  startWithType<TPrimitiveBackground>(),
  mapDefaultProps({
    overflow: 0,
  }),
  mapProps(({
    color,
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
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      borderBottomLeftRadius: radius,
      backgroundColor: colorToString(color),
    }

    const props: HTMLProps<HTMLDivElement> = {
      style,
    }

    return props
  })
)((props) => (
  <div {...props}/>
))

PrimitiveBackground.displayName = 'PrimitiveBackground'
