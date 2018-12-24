/**
 * 中间件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Counter from './App'

// 1. 定义 reducer
import rootReducer from './reducer'
// 2. 基于 redecer 创建 store
// const store = createStore(Reducer, 10)
const store = createStore(rootReducer)

const dispatch = store.dispatch
store.dispatch = function (action) {
  console.log(action)
  dispatch(action)
}
// 3. 获取 store 的状态
console.log(store.getState())
// 4. 更新 store 的状态
setTimeout(() => {
  store.dispatch({
    type: 'CHANGE_USERNAME',
    payload: 'Jack'
  })
}, 1000)
// 5. 监控 store 中的 state 变化，驱动视图更新
store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(<Counter />, document.querySelector('#root'))
