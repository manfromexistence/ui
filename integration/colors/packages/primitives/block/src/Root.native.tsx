import React from 'react'
import { View } from 'react-native'
import type { ViewProps } from 'react-native'
import { normalizeNativeStyle } from 'stili'
import type { TStyle } from 'stili'
import { startWithType, component, mapDefaultProps, mapProps } from 'refun'
import { isNumber } from 'tsfn'
import type { TBlock } from './types'

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
      ref,
      role,
    }) => {
      const styles: TStyle = {
        borderStyle: 'solid',
        borderWidth: 0,
        position: 'relative',
        flexDirection: 'row',
        flexGrow: 0,
        flexShrink: 0,
        alignSelf: 'flex-start',
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        top,
        left,
        right,
        bottom,
        opacity,
        ...userStyle,
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

      if (shouldScroll) {
        styles.overflow = 'scroll'
      }

      if (shouldHideOverflow) {
        styles.overflow = 'hidden'
      }

      const props: ViewProps = {}

      if (shouldIgnorePointerEvents) {
        props.pointerEvents = 'none'
      }

      if (typeof id === 'string') {
        props.testID = id
      }

      return {
        ...props,
        style: normalizeNativeStyle(styles),
        children,
        ref,
        role,
      }
    }
  )
)(({ role, ...props }) => {
  switch (role) {
    case 'navigation':
      return <View accessibilityRole="menu" {...props}/>

    case 'header':
      return <View accessibilityRole="header" {...props}/>

    default:
      return <View {...props}/>
  }
})

Block.displayName = 'Block'
