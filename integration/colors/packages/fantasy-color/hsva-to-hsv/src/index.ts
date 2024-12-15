// eslint-disable-next-line import/no-unresolved
import type { THsv, THsva } from '@fantasy-color/types'

export default ({ hue, saturation, value }: THsva): THsv => ({
  hue,
  saturation,
  value,
})
