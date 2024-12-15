import React from 'react'
import { App as SandboxApp } from '@revert/sandbox'
import { components } from './components'

export const App = () => (
  <SandboxApp
    components={components}
    getImportPackageName={() => 'primitives'}
    componentPlugin={{
      shouldMeasureComponent: true,
    }}
  />
)
