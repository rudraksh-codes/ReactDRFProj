import React from 'react'
import useCounter from '../hooks/useCounter'

const LearnCustomHooks = () => {
    const c = useCounter(4)
  return (
    <>
        <h1>CustomHook</h1>
        <p>count : {c.count}</p>
        <button onClick={c.increment}>Inc</button>
        <button onClick={c.decrement}>Dec</button>
        <button onClick={c.reset}>Reset</button>
        
    </>
  )
}

export default LearnCustomHooks
