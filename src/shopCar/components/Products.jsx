import React, { Component } from 'react'

class Products extends Component {
  render () {
    const { products } = this.props
    console.log(products)
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(item => (
            <li key={item}>{item}</li>
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
