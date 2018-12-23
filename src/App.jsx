import React, { Component } from 'react'

class Counter extends Component {
  constructor () {
    super()

    this.state = {}
  }
  render () {
    return (
      <div>
        <p>{this.props.value}</p>
        <button onClick={this.props.add}>+</button>&nbsp;&nbsp;
        <button onClick={this.props.sub}>-</button>
      </div>
    )
  }
}

export default Counter
