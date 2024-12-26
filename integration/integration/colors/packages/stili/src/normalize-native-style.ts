import { getObjectKeys, isUndefined, getObjectEntries } from 'tsfn'
import type { FlexStyle } from 'react-native'
import type { TStyle, TNativeStyle } from './types'

export const normalizeNativeStyle = <T extends FlexStyle = TNativeStyle>(style: TStyle): T =>
  getObjectKeys(style).reduce((result, key) => {
    if (key === '_webOnly') {
      return result
    }

    if (key === '_nativeOnly') {
      const nativeOnly = style[key]

      if (isUndefined(nativeOnly)) {
        return result
      }

      return getObjectEntries(nativeOnly).reduce((nativeResult, [nativeKey, nativeValue]) => {
        if (isUndefined(nativeValue)) {
          return nativeResult
        }

        // Rest keys
        nativeResult[nativeKey as keyof T] = nativeValue as any

        return nativeResult
      }, result)
    }

    if (key === 'fontWeight') {
      const value = style[key]

      if (isUndefined(value)) {
        return result
      }

      result[key as keyof T] = String(value) as any

      return result
    }

    // Rest keys
    const value = style[key]

    if (isUndefined(value)) {
      return result
    }

    result[key as keyof T] = value as any

    return result
  }, {} as T)
