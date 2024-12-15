import { setupTheme } from '@themeables/core'
import type { TThemeableSpacer } from './types'

export type { TThemeSpacer, TThemeableSpacer, TThemeableSpacers } from './types'

export const setupSpacerTheme = (overrideTheme = {}) => {
  const { ThemePiece, createThemeable } = setupTheme<TThemeableSpacer>(overrideTheme)

  return {
    SpacerTheme: ThemePiece,
    createThemeableSpacer: createThemeable,
  }
}
