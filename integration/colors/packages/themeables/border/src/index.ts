import { setupTheme } from '@themeables/core'
import type { TThemeableBorder } from './types'

export type { TThemeBorder, TThemeableBorder, TThemeableBorders } from './types'

export const setupBorderTheme = (overrideTheme = {}) => {
  const { ThemePiece, createThemeable } = setupTheme<TThemeableBorder>(overrideTheme)

  return {
    BorderTheme: ThemePiece,
    createThemeableBorder: createThemeable,
  }
}
