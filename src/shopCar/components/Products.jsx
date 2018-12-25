import React, { Component } from 'react'

class Products extends Component {
  render () {
    const { products, addToCart } = this.props
    console.log(products)
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(item => (
            <li key={item.id}>
              <span>{item.title} ~~ {item.price} ~~ {item.inventory}</span> <br/>
              <button
                disabled={!item.inventory}
                onClick={() => addToCart(item)}>{item.inventory ? '加入购物车' : '没有库存啦'}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  componentDidMount () {
    this.props.getAllProducts()
  }
}

export default Products
