import type { MutableRefObject } from 'react'
import { pipe } from '@psxcode/compose'
import { startWithType, mapContext, onUpdate, mapRef } from 'refun'
import { isFunction } from 'tsfn'
import type { TExtend3 } from 'tsfn'
import { SizeContext } from './Context'
import type { TSizeContext } from './Context'
import type { TSize } from './types'

const getId = (() => {
  let id = 0

  return () => id++
})()

export const mapSizeUpdate = <P extends TSize> () => {
  if (process.env.NODE_ENV !== 'production') {
    return pipe(
      startWithType<P & TSize>(),
      mapContext(SizeContext),
      mapRef('sizeId', getId()),
      onUpdate(({ sizeId, onSizeUpdate }) => {
        if (isFunction(onSizeUpdate)) {
          onSizeUpdate(sizeId.current)
        }
      }, ['width', 'height'])
    )
  }

  // same function type as above
  return (props: P) => props as any as TExtend3<P, TSizeContext, {sizeId: MutableRefObject<number>}>
}
