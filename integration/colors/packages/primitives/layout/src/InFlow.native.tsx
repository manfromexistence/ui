import React from 'react'
import type { ReactNode } from 'react'
import { component, startWithType, mapProps, mapContext, mapDefaultProps } from 'refun'
import { normalizeNativeStyle } from 'stili'
import type { TStyle } from 'stili'
import { isNumber } from 'tsfn'
import { View } from 'react-native'
import type { ViewProps } from 'react-native'
import { Context } from './context'
import type { TLayoutInFlow } from './types'

export const LayoutInFlow = component(
  startWithType<TLayoutInFlow>(),
  mapDefaultProps({
    shouldIgnorePointerEvents: false,
    shouldScroll: false,
    minWidth: 0,
    minHeight: 0,
  }),
  mapContext(Context),
  mapProps(({
    direction,
    width,
    height,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    shouldScroll,
    shouldIgnorePointerEvents,
    children,
  }) => {
    const style: TStyle = {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      flexGrow: 0,
      flexShrink: 0,
      alignSelf: 'auto',
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
    }

    let wrappedChildren = children

    if (direction === 'horizontal') {
      if (width === 'stretch') {
        style.flexGrow = 1
        style.flexShrink = 1
      } else if (width === 'equal') {
        style.flexGrow = 1
        style.flexShrink = 1
        style.flexBasis = 0
      } else if (isNumber(width)) {
        style.width = width
      } else {
        wrappedChildren = (
          <View>{children}</View>
        )
      }

      if (height === 'stretch') {
        style.alignSelf = 'stretch'
      } else if (isNumber(height)) {
        style.height = height
      }
    } else if (direction === 'vertical') {
      if (width === 'stretch') {
        style.alignSelf = 'stretch'
      } else if (isNumber(width)) {
        style.width = width
      }

      if (height === 'stretch') {
        style.flexGrow = 1
        style.flexShrink = 1
      } else if (isNumber(height)) {
        style.height = height
      } else {
        wrappedChildren = (
          <View>{children}</View>
        )
      }
    }

    if (shouldScroll) {
      style.overflow = 'scroll'
    }

    const props: ViewProps & {children: ReactNode} = {
      style: normalizeNativeStyle(style),
      children: wrappedChildren,
    }

    if (shouldIgnorePointerEvents) {
      props.pointerEvents = 'none'
    }

    return props
  })
)(({ children, pointerEvents, style }) => (
  <View
    style={style}
    pointerEvents={pointerEvents}
  >
    {children}
  </View>
))

LayoutInFlow.displayName = 'LayoutInFlow'
