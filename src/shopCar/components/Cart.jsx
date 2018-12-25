import React, { Component } from 'react'

class Cart extends Component {
  render () {
    const { cartProducts } = this.props
    return (
      <div>
        <h2>Cart</h2>
        <ul>
          {
            cartProducts.map(item => (
              <li key={item.id}>
                {item.title} - {item.price} * {item.quantity}
              </li>
            ))
          }
        </ul>
        <p>
          {!cartProducts.length && <p>购物车为空</p>}
        </p>
      </div>
    )
  }
}

export default Cart
