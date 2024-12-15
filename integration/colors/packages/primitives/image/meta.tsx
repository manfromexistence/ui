import type { TComponentConfig } from 'autoprops'
import type { TImage } from './src/types'

export const config: TComponentConfig<TImage> = {
  props: {
    source: ['data:image/gif;base64,R0lGODdhAQABAIABAAAAAP///ywAAAAAAQABAAACAkQBADs='],
    alt: ['image'],
    width: [100],
    height: [100],
    bottomLeftRadius: [20],
    bottomRightRadius: [20],
    topLeftRadius: [20],
    topRightRadius: [20],
    resizeMode: ['cover', 'contain'],
  },
  required: ['source'],
  deps: {
    bottomLeftRadius: ['bottomRightRadius', 'topLeftRadius', 'topRightRadius'],
    bottomRightRadius: ['bottomLeftRadius', 'topLeftRadius', 'topRightRadius'],
    topLeftRadius: ['bottomLeftRadius', 'bottomRightRadius', 'topRightRadius'],
    topRightRadius: ['bottomLeftRadius', 'bottomRightRadius', 'topLeftRadius'],
  },
}

export { Image as Component } from './src'

// @ts-ignore
export { default as readme } from './readme.md'
