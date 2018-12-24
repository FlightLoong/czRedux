import { createStore, combineReducers } from 'redux'
import products from '../reducers/products'
import cart from '../reducers/cart'

// function reducer (state = { foo: 'bar' }, action = {}) {
//   return state
// }

const rootReducer = combineReducers({
  products,
  cart
})

const store = createStore(rootReducer)

export default store
