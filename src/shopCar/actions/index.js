import * as shop from '../api/shop'

export const reciveProductes = products => ({
  type: 'RECIVE_PRODUCTS',
  products
})

export const addToCart = product => ({
  type: 'ADD_TO_CART',
  product
})

export const getAllProducts = () => dispath => {
  shop.getAllProducts(products => {
    dispath(reciveProductes(products))
  })
}

export const setCheckoutStatus = status => ({
  type: 'SET_CHECKOUT_STATUS',
  status
})

export const setCartItems = items => ({
  type: 'SET_ITEMS',
  items
})

export const checkout = (products) => dispath => {
  // 备份购物车数据
  const saveCartProducts = [...products]
  // 清空结算状态
  dispath(setCheckoutStatus(null))
  // 清空购物车
  dispath(setCartItems([]))
}

export const handleAddToCart = product => dispath => {
  dispath(addToCart)
}
