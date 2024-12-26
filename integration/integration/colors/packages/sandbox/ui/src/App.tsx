import React from 'react'
import { component, startWithType, onChange } from 'refun'
import { Root } from './components/root'
import { ThemeProvider } from './components/theme-provider'
import { Sandbox } from './components/sandbox'
import { NotificationProvider } from './components/notification-provider'
import { AlertProvider } from './components/alert-provider'
import { PortalProvider } from './components/portal-provider'
import { PluginProvider } from './components/plugin-provider'
import { ImportPackageNameProvider } from './components/import-package-name-provider'
import type { TApp } from './types'
import { setComponentsList } from './store-meta'
import './store'
import './store-sync'

export const App = component(
  startWithType<TApp>(),
  onChange(({ components }) => {
    setComponentsList(components)
  }, ['components'])
)(({ theme, icons, getImportPackageName, plugin }) => (
  <Root>
    <ThemeProvider theme={theme} icons={icons}>
      <PluginProvider plugin={plugin}>
        <ImportPackageNameProvider getImportPackageName={getImportPackageName}>
          <AlertProvider>
            <NotificationProvider>
              <PortalProvider>
                <Sandbox/>
              </PortalProvider>
            </NotificationProvider>
          </AlertProvider>
        </ImportPackageNameProvider>
      </PluginProvider>
    </ThemeProvider>
  </Root>
))
