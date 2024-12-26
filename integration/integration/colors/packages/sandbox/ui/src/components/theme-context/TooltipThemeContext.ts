import { createContext } from 'react'
import { WHITE, BLACK } from '../../colors'
import type { TColor } from '../../colors'

export type TTooltipThemeContext = {
  backgroundColor: TColor,
  color: TColor,
}

export const TooltipThemeContext = createContext<TTooltipThemeContext>({
  backgroundColor: WHITE,
  color: BLACK,
})
