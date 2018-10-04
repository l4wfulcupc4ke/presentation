import React from 'react'
import ReactDOM from 'react-dom'
import Parent from './rematchParent'
import { Provider } from 'react-redux'
import { store } from './rematch/store'

ReactDOM.render(
  <Provider store={store}>
    <Parent />
  </Provider>
, document.getElementById('root'))
