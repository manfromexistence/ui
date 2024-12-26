import { setupTheme } from '@themeables/core'
import type { TThemeableImage } from './types'

export type { TThemeImage, TThemeableImage, TThemeableImages } from './types'

export const setupImageTheme = (overrideTheme = {}) => {
  const { ThemePiece, createThemeable } = setupTheme<TThemeableImage>(overrideTheme)

  return {
    ImageTheme: ThemePiece,
    createThemeableImage: createThemeable,
  }
}
