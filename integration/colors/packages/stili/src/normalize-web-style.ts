import { getObjectKeys, getObjectEntries, isUndefined } from 'tsfn'
import { convertTransformArray } from './convert-transform-array'
import type { TStyle, TWebStyle } from './types'

export const normalizeWebStyle = (style: TStyle): TWebStyle =>
  getObjectKeys(style).reduce((result, key) => {
    if (key === '_nativeOnly') {
      return result
    }

    if (key === '_webOnly') {
      const webOnly = style[key]

      if (isUndefined(webOnly)) {
        return result
      }

      return getObjectEntries(webOnly).reduce((webResult, [webKey, webValue]) => {
        if (isUndefined(webValue)) {
          return webResult
        }

        if (webKey === 'userSelect') {
          webResult.WebkitUserSelect = webValue as TWebStyle['WebkitUserSelect']
          webResult.MozUserSelect = webValue as TWebStyle['MozUserSelect']
          webResult.msUserSelect = webValue as TWebStyle['msUserSelect']
          webResult.userSelect = webValue as TWebStyle['userSelect']

          return webResult
        }

        if (webKey === 'appearance') {
          webResult.WebkitAppearance = webValue as TWebStyle['WebkitAppearance']
          webResult.MozAppearance = webValue as TWebStyle['MozAppearance']
          webResult.appearance = webValue as TWebStyle['appearance']

          return webResult
        }

        if (webKey === 'tapHighlightColor') {
          webResult.WebkitTapHighlightColor = webValue as TWebStyle['WebkitTapHighlightColor']
          webResult.tapHighlightColor = webValue as TWebStyle['tapHighlightColor']

          return webResult
        }

        if (webKey === 'fontSmoothing') {
          const anyWebResult = webResult as any

          anyWebResult.WebkitFontSmoothing = 'antialised'
          anyWebResult.MozOsxFontSmoothing = 'grayscale'

          return webResult
        }

        // Rest keys
        (webResult[webKey] as any) = webValue

        return webResult
      }, result)
    }

    if (key === 'lineHeight') {
      const value = style[key]

      if (isUndefined(value)) {
        return result
      }

      result[key] = `${value}px`

      return result
    }

    if (key === 'letterSpacing') {
      const value = style[key]

      if (isUndefined(value)) {
        return result
      }

      result[key] = `${value}px`

      return result
    }

    if (key === 'transform') {
      const value = style[key]

      if (isUndefined(value)) {
        return result
      }

      result[key] = convertTransformArray(value)

      return result
    }

    // Rest keys
    const value = style[key]

    if (isUndefined(value)) {
      return result
    }

    (result[key] as any) = value

    return result
  }, {} as TWebStyle)
