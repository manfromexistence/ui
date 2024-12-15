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
import type { THeading } from './types'

export const Heading = component(
  startWithType<THeading>(),
  mapDefaultProps({
    blockEnd: 0,
    blockStart: 0,
    shouldPreserveWhitespace: false,
    shouldPreventSelection: false,
    shouldPreventWrap: false,
    shouldHideOverflow: false,
    isUnderlined: false,
  }),
  mapWithProps(({
    align,
    blockEnd,
    blockStart,
    color,
    direction,
    inlineEnd,
    inlineStart,
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
    const style: TStyle = {
      _webOnly: {
        fontSmoothing: 'antialiased',
        maxWidth: '100%',
        textRendering: 'geometricPrecision',
        textSizeAdjust: 'none',
      },
      fontFamily,
      fontSize,
      fontWeight,
      minWidth: 0,
      letterSpacing,
      lineHeight,
      paddingBottom: 0,
      paddingLeft: inlineStart,
      paddingRight: inlineEnd,
      paddingTop: 0,
      marginBottom: blockEnd,
      marginTop: blockStart,
    }

    if (isColor(color)) {
      style.color = colorToString(color)
    }

    if (align) {
      switch (align) {
        case 'start': {
          style.textAlign = direction === 'right-to-left' ? 'right' : 'left'

          break
        }

        case 'center': {
          style._webOnly!.textAlign = 'center'

          break
        }

        case 'end': {
          style.textAlign = direction === 'right-to-left' ? 'left' : 'right'

          break
        }
      }
    }

    if (direction) {
      style._webOnly!.direction = direction === 'left-to-right' ? 'ltr' : 'rtl'
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

    return {
      style: normalizeWebStyle(style),
    }
  })
)(({ children, level, style, id }) => {
  switch (level) {
    case 6:
      return <h6 id={id} style={style}>{children}</h6>
    case 5:
      return <h5 id={id} style={style}>{children}</h5>
    case 4:
      return <h4 id={id} style={style}>{children}</h4>
    case 3:
      return <h3 id={id} style={style}>{children}</h3>
    case 2:
      return <h2 id={id} style={style}>{children}</h2>
    case 1:
    default:
      return <h1 id={id} style={style}>{children}</h1>
  }
})

Heading.displayName = 'Heading'
