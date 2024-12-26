import { setupTheme } from '@themeables/core'
import type { TThemeableTextAlign } from './types'

export type { TAlign, TDirection, TThemeTextAlign, TThemeableTextAlign, TThemeableTextAligns } from './types'

export const setupTextAlignTheme = (overrideTheme = {}) => {
  const { ThemePiece, createThemeable } = setupTheme<TThemeableTextAlign>(overrideTheme)

  return {
    TextAlignTheme: ThemePiece,
    createThemeableTextAlign: createThemeable,
  }
}
