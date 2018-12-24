import React, { Component } from 'react'

class Products extends Component {
  render () {
    return (
      <div>
        <h2>Products</h2>
        <h4>{this.props.foo}</h4>
      </div>
    )
  }
}

export default Products
