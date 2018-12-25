import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import products from '../reducers/products'
import cart from '../reducers/cart'
import ReduxThunk from 'redux-thunk'

// function reducer (state = { foo: 'bar' }, action = {}) {
//   return state
// }

const rootReducer = combineReducers({
  products,
  cart
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(ReduxThunk)
  )
)

export default store
