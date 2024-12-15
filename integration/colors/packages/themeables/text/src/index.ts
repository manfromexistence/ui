import { setupTheme } from '@themeables/core'
import type { TThemeableText } from './types'

export type { TThemeText, TThemeableText, TThemeableTexts } from './types'

export const setupTextTheme = (overrideTheme = {}) => {
  const { ThemePiece, createThemeable } = setupTheme<TThemeableText>(overrideTheme)

  return {
    TextTheme: ThemePiece,
    createThemeableText: createThemeable,
  }
}
