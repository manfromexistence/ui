import { createContext } from 'react'
import type { TPlugin } from './types'

export type TPluginContext = {
  plugin?: TPlugin,
}

export const PluginContext = createContext<TPluginContext>({})
