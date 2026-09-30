import React from 'react'
import useCounter from '../hooks/useCounter'

const LearnCustomHooks = () => {
    const {count, increment, decrement, reset} = useCounter(5)
  return (
    <>
        <h1>CustomHook</h1>
        <p>count : {count}</p>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
        <button onClick={reset}>Reset</button>
        
    </>
  )
}

export default LearnCustomHooks
