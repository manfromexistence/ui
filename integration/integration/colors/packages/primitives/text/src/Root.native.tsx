import React from 'react'
import {
  component,
  mapWithProps,
  startWithType,
  mapDefaultProps,
} from 'refun'
import { Text as NativeText } from 'react-native'
import type { TextProps } from 'react-native'
import { normalizeNativeStyle } from 'stili'
import type { TStyle } from 'stili'
import { colorToString, isColor } from 'colorido'
import type { TText } from './types'

export const Text = component(
  startWithType<TText>(),
  mapDefaultProps({
    shouldPreserveWhitespace: false,
    shouldPreventSelection: false,
    shouldPreventWrap: false,
    shouldHideOverflow: false,
    isUnderlined: false,
    isItalic: false,
  }),
  mapWithProps(({
    color,
    letterSpacing,
    lineHeight,
    fontFamily,
    fontWeight,
    isItalic,
    fontSize,
    isUnderlined,
    shouldPreventSelection,
    shouldPreventWrap,
    shouldHideOverflow,
  }) => {
    const style: TStyle = {
      backgroundColor: 'transparent',
      lineHeight,
      fontFamily,
      fontWeight,
      fontStyle: isItalic ? 'italic' : 'normal',
      fontSize,
      letterSpacing,
    }

    if (isColor(color)) {
      style.color = colorToString(color)
    }

    if (isUnderlined) {
      style.textDecorationLine = 'underline'
    }

    const props: TextProps = {
      style: normalizeNativeStyle(style),
      selectable: !shouldPreventSelection,
    }

    if (shouldPreventWrap) {
      props.numberOfLines = 1
    }

    if (shouldHideOverflow) {
      props.numberOfLines = 1
      props.ellipsizeMode = 'tail'
    }

    return props
  })
)(({ id, children, style, numberOfLines, ellipsizeMode, selectable }) => (
  <NativeText
    testID={id}
    selectable={selectable}
    numberOfLines={numberOfLines}
    ellipsizeMode={ellipsizeMode}
    style={style}
  >
    {children}
  </NativeText>
))

Text.displayName = 'Text'
