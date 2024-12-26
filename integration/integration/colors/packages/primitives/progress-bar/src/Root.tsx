import React from 'react'
import type { HTMLProps } from 'react'
import { normalizeWebStyle } from 'stili'
import { component, startWithType, mapProps } from 'refun'
import { isDefined, isNumber } from 'tsfn'
import type { TStyle } from 'stili'
import type { TProgressBar } from './types'

export const ProgressBar = component(
  startWithType<TProgressBar>(),
  mapProps(({ style, id, ariaValuenow, ariaValuemin, ariaValuemax, accessibilityLabel, children }) => {
    const styles: TStyle = {
      display: 'flex',
      borderWidth: 0,
      position: 'relative',
      flexGrow: 0,
      flexShrink: 0,
      _webOnly: {
        boxSizing: 'border-box',
      },
      ...style,
    }

    const props: HTMLProps<HTMLDivElement> = {
      id,
      children,
    }

    if (isNumber(ariaValuenow)) {
      props['aria-valuenow'] = ariaValuenow
    }

    if (isNumber(ariaValuemin)) {
      props['aria-valuemin'] = ariaValuemin
    }

    if (isNumber(ariaValuemax)) {
      props['aria-valuemax'] = ariaValuemax
    }

    if (isDefined(accessibilityLabel)) {
      props['aria-label'] = accessibilityLabel
    }

    return {
      ...props,
      style: normalizeWebStyle(styles),
    }
  })
)((props) => (
  <div
    role={'progressbar'}
    {...props}
  />
))

ProgressBar.displayName = 'ProgressBar'
