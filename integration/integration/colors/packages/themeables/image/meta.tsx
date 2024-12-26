import React from 'react'
import type { TComponentConfig } from 'autoprops'
import { Image } from '@primitives/image'
import type { TImage } from '@primitives/image'
import type { TComponentControls } from '@revert/sandbox'
import { SYMBOL_CONTROL_SWITCH } from '@revert/sandbox'
import { setupImageTheme } from './src'
import type { TThemeableImages } from './src'

type TDemo = {}

type Mappings = {
  demo: TDemo,
}

const defaultTheme: TThemeableImages<Mappings> = {
  demo: () => ({
    resizeMode: 'cover',
    width: 100,
    height: 100,
    bottomLeftRadius: 20,
    bottomRightRadius: 20,
    topLeftRadius: 20,
    topRightRadius: 20,
  }),
}

const { ImageTheme, createThemeableImage } = setupImageTheme()

const DemoThemeableImage = createThemeableImage<TImage, Mappings>('demo', Image)

const newTheme: TThemeableImages<Mappings> = {
  demo: () => ({
    resizeMode: 'contain',
    width: 70,
    height: 70,
    bottomLeftRadius: 5,
    bottomRightRadius: 5,
    topLeftRadius: 5,
    topRightRadius: 5,
  }),
}

type TDemoComponent = TDemo & { hasTheme: boolean}

export const Component = ({ hasTheme }: TDemoComponent) => (
  <ImageTheme.Provider value={hasTheme ? newTheme : defaultTheme}>
    <DemoThemeableImage
      source="image.png"
      height={200}
      width={200}
    />
  </ImageTheme.Provider>
)

Component.displayName = 'ThemeableImage'

export const config: TComponentConfig<TDemoComponent> = {
  props: {
    hasTheme: [true],
  },
}

// @ts-ignore
export { default as readme } from './readme.md'

export const controls: TComponentControls<TDemoComponent> = {
  hasTheme: SYMBOL_CONTROL_SWITCH,
}
