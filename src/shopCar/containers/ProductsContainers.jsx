import { connect } from 'react-redux'
import Products from '../components/Products'

console.log('1')
function mapStateToProps (state) {
  return {
    foo: state.products.foo
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export default ProductsContainer
