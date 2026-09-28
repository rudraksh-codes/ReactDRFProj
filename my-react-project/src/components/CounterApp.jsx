import { useState } from "react"

const CounterApp = () => {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1); 
    }

    const decreaseCount = () => {
        if (count != 0){
            setCount(count - 1);  
        }; 
    }

    const resetCount = () => {
        setCount(0); 
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
