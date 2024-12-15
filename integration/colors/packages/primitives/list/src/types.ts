import type { ReactNode } from 'react'

export type TList = {
  id?: string,
  children: ReactNode,
  type?: 'orderedList' | 'unorderedList',
}

export type TListItem = {
  id?: string,
  children?: ReactNode,
}
