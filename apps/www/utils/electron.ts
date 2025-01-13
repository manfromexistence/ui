import hotkeys from 'hotkeys-js'
import { isSearchOpen } from '../data'
import { isElectron } from '../src/env'

if (isElectron) {
  hotkeys('ctrl+f, command+f', (e) => {
    e.preventDefault()
    isSearchOpen.value = !isSearchOpen.value
  })
}
