import { setupTheme } from '@themeables/core'
import type { TThemeableLayout } from './types'

export type { TThemeLayout, TThemeableLayout, TThemeableLayouts } from './types'

export const setupLayoutTheme = (overrideTheme = {}) => {
  const { ThemePiece, createThemeable } = setupTheme<TThemeableLayout>(overrideTheme)

  return {
    LayoutTheme: ThemePiece,
    createThemeableLayout: createThemeable,
  }
}
