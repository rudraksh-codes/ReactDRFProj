import { useState } from "react"

const CounterApp = () => {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        let newCount = count + 1 
        setCount(newCount)
    }

    const decreaseCount = () => {
        if (count != 0){
            let newCount = count - 1
            setCount(newCount)
        }
    }

    const resetCount = () => {
        setCount(0)
    }

  return (
    <>
        <h2>Counter App</h2>
        <h2>Count : {count}</h2>
        <button onClick={increaseCount}>Increase</button><br />
        <button onClick={decreaseCount}>Decrease</button><br />
        <button onClick={resetCount}>Reset</button>
    </>
  )
}

export default CounterApp
