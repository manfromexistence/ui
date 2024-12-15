import React from 'react'
import type { ReactNode, FC } from 'react'
import { View } from 'react-native'

export type TTableBody = {
  id?: string,
  children?: ReactNode,
}

export const TableBody: FC<TTableBody> = ({ id, children }) => (
  <View testID={id}>
    {children}
  </View>
)

TableBody.displayName = 'TableBody'
