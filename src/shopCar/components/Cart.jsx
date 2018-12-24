import React, { Component } from 'react'

class Cart extends Component {
  render () {
    const { foo } = this.props
    console.log(foo)
    return (
      <div>
        <h2>Cart</h2>
        <h4>{foo}</h4>
      </div>
    )
  }
}

export default Cart
