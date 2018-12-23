import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import Counter from './App'

// 1. 定义 reducer
function Reducer (state = 0, action) {
  const { type } = action
  if (type === 'add') {
    return state + 1
  } else if (type === 'sub') {
    return state - 1
  } else {
    return state
  }
}
// 2. 基于 redecer 创建 store
const store = createStore(Reducer, applyMiddleware(ReduxThunk))
// 3. 获取 store 的状态
console.log(store.getState())
// 4. 更新 store 的状态
setTimeout(() => {
  store.dispatch({
    type: 'add'
  })
}, 1000)
// 5. 监控 store 中的 state 变化，驱动视图更新
store.subscribe(() => {
  console.log(store.getState())
  render()
})

function add () {
  return {
    type: 'add'
  }
}
function sub () {
  return {
    type: 'sub'
  }
}

function asyncSub () {
  return function (dispatch, getState) {
    const state = getState()
    if (state % 2 === 0) {
      return
    }
    setTimeout(function () {
      dispatch(sub())
    })
  }
}

function render () {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      add={() => store.dispatch(add())}
      sub={() => store.dispatch(asyncSub(2))}
    />,
    document.querySelector('#root'))
}
render()
