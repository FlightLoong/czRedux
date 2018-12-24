import React, { Component } from 'react'

// 组织容器组件
import CounterContainer from './containers/CountContainers'

class App extends Component {
  constructor() {
    super()

    this.state = {}
  }
  render() {
    return (
      <div>
        <CounterContainer />
      </div>
    )
  }
}

export default App
