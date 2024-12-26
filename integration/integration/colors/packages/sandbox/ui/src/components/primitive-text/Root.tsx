import React from 'react'
import type { CSSProperties } from 'react'
import {
  component,
  mapDefaultProps,
  mapWithProps,
  startWithType,
} from 'refun'
import { isNumber } from 'tsfn'
import { isColor, colorToString } from '../../colors'
import type { TPrimitiveText } from './types'

export const PrimitiveText = component(
  startWithType<TPrimitiveText>(),
  mapDefaultProps({
    shouldPreserveWhitespace: false,
    shouldPreventSelection: false,
    shouldPreventWrap: false,
    shouldHideOverflow: false,
    isUnderlined: false,
  }),
  mapWithProps(({
    color,
    letterSpacing,
    lineHeight,
    fontFamily,
    fontWeight,
    fontSize,
    isUnderlined,
    shouldPreserveWhitespace,
    shouldPreventSelection,
    shouldPreventWrap,
    shouldHideOverflow,
  }) => {
    const style: CSSProperties = {
      fontFamily,
      fontWeight,
      fontSize,
      minWidth: 0,
      maxWidth: '100%',
      textRendering: 'geometricPrecision',
      textSizeAdjust: 'none',
    }

    if (isColor(color)) {
      style.color = colorToString(color)
    }

    if (shouldPreserveWhitespace) {
      style.whiteSpace = 'pre'
      style.flexShrink = 0
    }

    if (shouldPreventWrap) {
      style.whiteSpace = 'nowrap'
      style.flexShrink = 0
    }

    if (shouldPreventSelection) {
      style.userSelect = 'none'
    }

    if (shouldHideOverflow) {
      style.whiteSpace = 'nowrap'
      style.textOverflow = 'ellipsis'
      style.overflow = 'hidden'
      style.flexShrink = 0
    }

    if (isNumber(letterSpacing)) {
      style.letterSpacing = letterSpacing
    }

    if (isNumber(lineHeight)) {
      style.lineHeight = `${lineHeight}px`
    }

    if (isUnderlined) {
      style.textDecorationLine = 'underline'
    }

    return {
      style,
    }
  })
)(({ children, style, id }) => (
  <span id={id} style={style}>{children}</span>
))

PrimitiveText.displayName = 'PrimitiveText'
