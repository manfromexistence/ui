import * as React from 'react'
import { Button } from '../../src'

const App = () => (
  <Button
    aria-label={'accessibilityLabel'}
    isDisabled
    id={'btn'}
    onPress={() => {}}
  >
    disabled button
  </Button>
)

export default App
