import { setupTheme } from '@themeables/core'
import type { TThemeableVectorShape } from './types'

export type { TThemeVectorShape, TThemeableVectorShape, TThemeableVectorShapes } from './types'

export const setupVectorShapeTheme = (overrideTheme = {}) => {
  const { ThemePiece, createThemeable } = setupTheme<TThemeableVectorShape>(overrideTheme)

  return {
    VectorShapeTheme: ThemePiece,
    createThemeableVectorShape: createThemeable,
  }
}
