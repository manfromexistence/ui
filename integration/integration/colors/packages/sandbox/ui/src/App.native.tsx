import React from 'react'
import { component, startWithType, onChange } from 'refun'
import { Root } from './components/root'
import { ThemeProvider } from './components/theme-provider'
import { Sandbox } from './components/sandbox'
import { setComponentsList } from './store-meta'
import { PluginProvider } from './components/plugin-provider'
import type { TApp } from './types'
import './store'
import './store-sync'

export const App = component(
  startWithType<TApp>(),
  onChange(({ components }) => {
    setComponentsList(components)
  }, ['components'])
)(({ theme, icons, plugin }) => (
  <Root>
    <ThemeProvider theme={theme} icons={icons}>
      <PluginProvider plugin={plugin}>
        <Sandbox/>
      </PluginProvider>
    </ThemeProvider>
  </Root>
))
