import React from 'react'
import type { FC } from 'react'
import { PluginContext } from './PluginContext'
import type { TPlugin } from './types'

export type TPluginProvider = {
  plugin?: TPlugin,
}

export const PluginProvider: FC<TPluginProvider> = ({ plugin, children }) => (
  <PluginContext.Provider value={{ plugin }}>
    {children}
  </PluginContext.Provider>
)
