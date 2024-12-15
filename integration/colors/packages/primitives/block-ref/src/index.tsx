import { forwardRef } from 'react'
import type { ForwardRefExoticComponent } from 'react'
import { Block } from '@primitives/block'
import type { TBlock } from '@primitives/block'

export type TBlockRef = TBlock

export const BlockRef: ForwardRefExoticComponent<TBlockRef> = forwardRef((props, ref) => (
  Block({ ...props, ref })
))

BlockRef.displayName = 'BlockRef'
