import { connect } from 'react-redux'
import Counter from '../components/Counter'

// 映射状态到 UI 组件
const mapStateToProps = state => {
  return {
    foo: 'bar',
    value: state
  }
}

// 映射行为到 UI 组件
const mapDispatchToProps = dispatch => {
  return {
    handleClick () {
      window.alert('hello')
    },
    handleAdd () {
      dispatch({
        type: 'add'
      })
    },
    handleSub () {
      dispatch({
        type: 'sub'
      })
    }
  }
}

// 建立连接
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer
