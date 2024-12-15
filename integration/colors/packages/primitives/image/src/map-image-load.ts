import type { MutableRefObject } from 'react'
import { pipe } from '@psxcode/compose'
import { isFunction } from 'tsfn'
import type { TExtend } from 'tsfn'
import { startWithType, mapContext, mapHandlers, mapRef, onUpdate } from 'refun'
import { ImageContext } from './Context'
import type { TImageContext } from './Context'
import type { TImage } from './types'

const getId = (() => {
  let id = 0

  return () => id++
})()

export const mapImageLoad = <P extends TImage> () => {
  if (process.env.NODE_ENV !== 'production') {
    return pipe(
      startWithType<P & TImage>(),
      mapContext(ImageContext),
      mapRef('imageId', getId()),
      onUpdate(({ imageId, onImageMount }) => {
        if (isFunction(onImageMount)) {
          onImageMount(imageId.current)
        }
      }, []),
      mapHandlers(({
        onLoad: ({ imageId, onLoad, onImageLoad }) => () => {
          if (isFunction(onLoad)) {
            onLoad()
          }

          if (isFunction(onImageLoad)) {
            onImageLoad(imageId.current)
          }
        },
        onError: ({ imageId, onError, onImageLoad }) => () => {
          if (isFunction(onError)) {
            onError()
          }

          if (isFunction(onImageLoad)) {
            onImageLoad(imageId.current)
          }
        },
      }))
    )
  }

  // same function type as above
  return (props: P) => props as any as TExtend<TExtend<P, TImageContext>, {imageId: MutableRefObject<number>}>
}
