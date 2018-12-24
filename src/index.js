/**
 * react-redux
 * React 与 Redux 之间建立连接
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './shopCar/store'

import App from './App'

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
