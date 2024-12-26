import React from 'react'
import { normalizeWebStyle } from 'stili'
import type { TStyle } from 'stili'
import { component, startWithType, mapDefaultProps, mapWithProps } from 'refun'
import type { TImage } from './types'

export const Image = component(
  startWithType<TImage>(),
  mapDefaultProps({
    resizeMode: 'cover',
  }),
  mapWithProps(({ bottomLeftRadius, bottomRightRadius, topLeftRadius, topRightRadius, resizeMode }) => {
    const style: TStyle = {
      _webOnly: {
        objectFit: resizeMode,
      },
      borderBottomLeftRadius: bottomLeftRadius,
      borderBottomRightRadius: bottomRightRadius,
      borderTopLeftRadius: topLeftRadius,
      borderTopRightRadius: topRightRadius,
    }

    return {
      style: normalizeWebStyle(style),
    }
  })
)(({ alt, source, id, height, width, style, onLoad, onError }) => (
  <img
    id={id}
    alt={alt}
    src={source}
    height={height}
    width={width}
    style={style}
    onLoad={onLoad}
    onError={onError}
  />
))

Image.displayName = 'Image'
