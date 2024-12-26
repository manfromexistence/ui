/* eslint-disable no-param-reassign */
import type { TEasingFn } from '../types'

export const easeOutCubic: TEasingFn = (from, range, time) => {
  return range * ((time -= 1) * time * time + 1) + from
}
