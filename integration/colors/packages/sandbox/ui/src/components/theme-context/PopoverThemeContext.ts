import { createContext } from 'react'
import { WHITE } from '../../colors'
import type { TColor } from '../../colors'

export type TPopoverThemeContext = {
  backgroundColor: TColor,
}

export const PopoverThemeContext = createContext<TPopoverThemeContext>({
  backgroundColor: WHITE,
})
