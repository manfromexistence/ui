import type { TComponentConfig } from 'autoprops'
import type { TText } from './src'

export const config: TComponentConfig<TText> = {
  props: {
    children: ['Button', 'Long button'],
  },
  required: ['children'],
}

export { Text as Component } from './src'
