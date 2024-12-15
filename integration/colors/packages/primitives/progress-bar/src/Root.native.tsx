import React from 'react'
import { View } from 'react-native'
import type { ViewProps } from 'react-native'
import { normalizeNativeStyle } from 'stili'
import type { TStyle } from 'stili'
import { startWithType, component, mapProps } from 'refun'
import { isNumber } from 'tsfn'
import type { TProgressBar } from './types'

export const ProgressBar = component(
  startWithType<TProgressBar>(),
  mapProps(
    ({
      style, id, ariaValuenow, ariaValuemin, ariaValuemax, accessibilityLabel, children,
    }) => {
      const styles: TStyle = {
        borderWidth: 0,
        position: 'relative',
        flexGrow: 0,
        flexShrink: 0,
        ...style,
      }
      const props: ViewProps = {
      }

      if (typeof id === 'string') {
        props.testID = id
      }

      if (isNumber(ariaValuenow)) {
        props.accessibilityValue = {
          ...(isNumber(ariaValuemin) ? { min: ariaValuemin } : {}),
          now: ariaValuenow,
          ...(isNumber(ariaValuemax) ? { max: ariaValuemax } : {}),
        }
        props.accessible = true
      }

      return {
        ...props,
        style: normalizeNativeStyle(styles),
        accessibilityLabel,
        children,
      }
    }
  )
)((props) => {
  return <View accessibilityRole="progressbar" {...props}/>
})

ProgressBar.displayName = 'ProgressBar'
