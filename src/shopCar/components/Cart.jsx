import React, { Component } from 'react'

class Cart extends Component {
  render () {
    const { cartProducts, totalPrice, checkout } = this.props
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
          {!cartProducts.length && <span>购物车为空</span>}
        </p>
        <p>总价：{totalPrice}</p>
        <button onClick={() => checkout(cartProducts)}>清空购物车</button>
      </div>
    )
  }
}

export default Cart
