import { createStore } from 'redux'
import type { Store } from 'redux'
import type { TState } from './types'
import { reducer } from './reducers'

export const store: Store<TState> = createStore(
  reducer
)
