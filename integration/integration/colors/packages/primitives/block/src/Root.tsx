import React from 'react'
import type { HTMLProps } from 'react'
import { normalizeWebStyle } from 'stili'
import type { TStyle } from 'stili'
import { component, startWithType, mapDefaultProps, mapProps } from 'refun'
import { isNumber, isDefined } from 'tsfn'
import type { TBlock, TBlockRoles } from './types'

export const Block = component(
  startWithType<TBlock>(),
  mapDefaultProps({
    shouldStretch: false,
    shouldIgnorePointerEvents: false,
    shouldScroll: false,
    shouldHideOverflow: false,
    isFloating: false,
    minWidth: 0,
    minHeight: 0,
  }),
  mapProps(
    ({
      id,
      ref,
      style: userStyle,
      width,
      height,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      top,
      right,
      bottom,
      left,
      isFloating,
      floatingIndex,
      opacity,
      children,
      shouldStretch,
      shouldScroll,
      shouldHideOverflow,
      shouldIgnorePointerEvents,
      onPointerEnter,
      onPointerLeave,
      onPointerDown,
      onPointerUp,
      onPointerMove,
      role,
    }) => {
      const styles: TStyle = {
        display: 'flex',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 0,
        position: 'relative',
        alignSelf: 'flex-start',
        flexGrow: 0,
        flexShrink: 0,
        top,
        left,
        right,
        bottom,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        opacity,
        ...userStyle,
        _webOnly: {
          boxSizing: 'border-box',
          ...userStyle?._webOnly,
        },
      }

      if (isNumber(width)) {
        styles.width = width
        styles.flexGrow = 0
        styles.flexShrink = 0
      }

      if (isNumber(height)) {
        styles.height = height
        styles.alignSelf = 'flex-start'
      }

      if (shouldStretch) {
        styles.flexGrow = 1
        styles.flexShrink = 1
        styles.alignSelf = 'stretch'
      }

      if (isFloating) {
        styles.position = 'absolute'
      }

      if (isFloating && isNumber(floatingIndex)) {
        styles.zIndex = floatingIndex
      }

      if (shouldIgnorePointerEvents) {
        styles._webOnly!.pointerEvents = 'none'
      }

      if (shouldScroll) {
        styles.overflow = 'scroll'
      }

      if (shouldHideOverflow) {
        styles.overflow = 'hidden'
      }

      const props: HTMLProps<HTMLDivElement> & { role: TBlockRoles } = {
        style: normalizeWebStyle(styles),
        children,
        onMouseEnter: onPointerEnter,
        onMouseLeave: onPointerLeave,
        onMouseDown: onPointerDown,
        onMouseUp: onPointerUp,
        onMouseMove: onPointerMove,
        role: 'none',
      }

      if (typeof id === 'string') {
        props.id = id
      }

      if (isDefined(ref)) {
        props.ref = ref
      }

      if (isDefined(role)) {
        props.role = role
      }

      return props
    }
  )
)(({ role, ...props }) => {
  switch (role) {
    case 'main':
      return <main {...props}/>
    case 'header':
      return <header {...props}/>
    case 'footer':
      return <footer {...props}/>
    case 'navigation':
      return <nav {...props}/>
    case 'section':
      return <section {...props}/>
    case 'secondary':
      return <aside {...props}/>
    case 'primary':
      return <article {...props}/>
    case 'none':
    default:
      return <div {...props}/>
  }
})

Block.displayName = 'Block'
