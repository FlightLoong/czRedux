import React, { Component } from 'react'
import Cart from './shopCar/containers/CartContainers'
import Products from './shopCar/containers/ProductsContainers'

class App extends Component {
  render () {
    return (
      <div>
        <h3>Redux 购物车</h3>
        <hr />
        <Products />
        <hr />
        <Cart />
      </div>
    )
  }
}

export default App
