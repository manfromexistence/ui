import React from 'react'
import { normalizeWebStyle } from 'stili'
import type { TStyle } from 'stili'
import {
  component,
  mapDefaultProps,
  mapWithProps,
  startWithType,
} from 'refun'
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
    role: 'none',
  }),
  mapWithProps(({
    color,
    letterSpacing,
    lineHeight,
    fontFamily,
    fontWeight,
    fontSize,
    isItalic,
    isUnderlined,
    shouldPreserveWhitespace,
    shouldPreventSelection,
    shouldPreventWrap,
    shouldHideOverflow,
    role,
  }) => {
    const style: TStyle = {
      _webOnly: {
        maxWidth: '100%',
        fontSmoothing: 'antialiased',
        textRendering: 'geometricPrecision',
        textSizeAdjust: 'none',
      },
      fontFamily,
      fontWeight,
      fontSize,
      fontStyle: isItalic ? 'italic' : 'normal',
      minWidth: 0,
      letterSpacing,
      lineHeight,
    }

    if (isColor(color)) {
      style.color = colorToString(color)
    }

    if (shouldPreserveWhitespace) {
      style._webOnly!.whiteSpace = 'pre'
      style.flexShrink = 0
    }

    if (shouldPreventWrap) {
      style._webOnly!.whiteSpace = 'nowrap'
      style.flexShrink = 0
    }

    if (shouldPreventSelection) {
      style._webOnly!.userSelect = 'none'
    }

    if (shouldHideOverflow) {
      style._webOnly!.whiteSpace = 'nowrap'
      style._webOnly!.textOverflow = 'ellipsis'
      style.overflow = 'hidden'
      style.flexShrink = 0
    }

    if (isUnderlined) {
      style.textDecorationLine = 'underline'
    }

    if (role === 'paragraph') {
      style._webOnly!.display = 'inline'
    }

    return {
      style: normalizeWebStyle(style),
    }
  })
)(({ children, style, id, role }) => {
  switch (role) {
    case 'paragraph':
      return <p id={id} style={style}>{children}</p>

    case 'important':
      return <strong id={id} style={style}>{children}</strong>

    case 'emphasis':
      return <em id={id} style={style}>{children}</em>

    case 'none':
    default:
      return <span id={id} style={style}>{children}</span>
  }
})

Text.displayName = 'Text'
