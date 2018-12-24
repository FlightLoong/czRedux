const initialState = {
  items: [],
  checkoutStatus: null,
  foo: 'baz'
}

const items = (state = initialState.items, action) => {
  return state
}

export default (state = initialState, action) => {
  return {
    items: items(state.items, action),
    checkoutStatus: state.checkoutStatus
  }
}
