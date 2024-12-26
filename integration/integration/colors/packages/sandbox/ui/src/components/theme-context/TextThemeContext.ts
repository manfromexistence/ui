import { createContext } from 'react'
import { BLACK } from '../../colors'
import type { TColor } from '../../colors'

export type TTextThemeContext = {
  color: TColor,
  fontFamily: string,
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  fontSize: number,
  lineHeight: number,
}

export const TextThemeContext = createContext<TTextThemeContext>({
  color: BLACK,
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 20,
})
