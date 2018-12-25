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

export const handleAddToCart = product => dispath => {
  dispath(addToCart)
}
