import {useMemo, useState} from 'react'

const LearnUseMemo = () => {
  
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(1000000000)

    const increaseCount = () => {
        if (count%10===0){
            setNumber(number+1)
        }
        setCount(count + 1); 
        
    }


    const sumOfNumbers = useMemo(()=> {
        let sum = 0; 
        for (let i=1; i<=number; i++){
            sum += i ; 
        }
        return sum; 
    }, [number])

        console.log(`sum of numbers from 1 to ${number} : `, sumOfNumbers)

    const decreaseCount = () => {
        if (count !=0){
        setCount(count - 1);

        }
    }

    const resetCount = () => {
        setCount(0); 
    }
  
    return (
    <>
        <h2>learn use memo </h2>
        <h3>Count : {count}</h3>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
    </>
  )
}

export default LearnUseMemo; 
