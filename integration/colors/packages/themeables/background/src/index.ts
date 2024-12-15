import { setupTheme } from '@themeables/core'
import type { TThemeableBackground } from './types'

export type { TThemeBackground, TThemeableBackground, TThemeableBackgrounds } from './types'

export const setupBackgroundTheme = (overrideTheme = {}) => {
  const { ThemePiece, createThemeable } = setupTheme<TThemeableBackground>(overrideTheme)

  return {
    BackgroundTheme: ThemePiece,
    createThemeableBackground: createThemeable,
  }
}
