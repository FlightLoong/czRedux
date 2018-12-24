import React from 'react'

const Counter = (props) => {
  console.log(props)
  return (
    <div>
      <p>Counter</p>
      <p>{props.value}</p>
      <button onClick={props.handleAdd}>+</button>
      <button onClick={props.handleSub}>-</button>
    </div>
  )
}

export default Counter
