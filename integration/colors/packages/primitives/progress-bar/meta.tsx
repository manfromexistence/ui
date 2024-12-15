import React from 'react'
import type { TComponentConfig } from 'autoprops'
import { Block } from '@primitives/block'
import type { TProgressBar } from './src'

export const config: TComponentConfig<TProgressBar> = {
  props: {
    style: [{ minWidth: 100, minHeight: 40, backgroundColor: '#ffb3c7' }],
    children: [<Block key="first" style={{ height: 40, width: 50, backgroundColor: '#17120f' }}/>],
    ariaValuemin: [0, 15],
    ariaValuenow: [80, 47],
    ariaValuemax: [100, 150],
    accessibilityLabel: ['Downloading progress'],
  },
  required: ['style'],
}

export { ProgressBar as Component } from './src'
export { default as packageJson } from './package.json'
