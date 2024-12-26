// eslint-disable-next-line import/no-unresolved
import type { TRgb, TRgba } from '@fantasy-color/types'

export default ({ red, green, blue }: TRgb): TRgba => ({
  red,
  green,
  blue,
  alpha: 1,
})
