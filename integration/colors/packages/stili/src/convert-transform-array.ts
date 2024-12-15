import type { TTransformValue } from './types'

export const convertTransformArray = (transform: TTransformValue): string => {
  return transform
    .map((transform) => {
      if ('translateY' in transform) {
        return `translateY(${transform.translateY}px)`
      }

      if ('translateX' in transform) {
        return `translateX(${transform.translateX}px)`
      }

      if ('scale' in transform) {
        return `scale(${transform.scale})`
      }

      if ('scaleX' in transform) {
        return `scaleX(${transform.scaleX})`
      }

      if ('scaleY' in transform) {
        return `scaleY(${transform.scaleY})`
      }

      if ('rotate' in transform) {
        return `rotate(${transform.rotate})`
      }

      if ('rotateX' in transform) {
        return `rotateX(${transform.rotateX})`
      }

      if ('rotateY' in transform) {
        return `rotateX(${transform.rotateY})`
      }

      if ('rotateZ' in transform) {
        return `rotateZ(${transform.rotateZ})`
      }

      if ('perspective' in transform) {
        return `perspective(${transform.perspective})`
      }

      if ('skewX' in transform) {
        return `skewX(${transform.skewX})`
      }

      if ('skewY' in transform) {
        return `skewY(${transform.skewY})`
      }
    })
    .join(' ')
}
