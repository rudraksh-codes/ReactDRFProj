import React from 'react'

const LearnProps = (props) => {
  return (
    <>
    <h1>Props</h1>
    <h2>Stock Name : {props.stock}</h2>
    <h1>Stock Price : {props.price}</h1>
    </>

  )
}

export default LearnProps
