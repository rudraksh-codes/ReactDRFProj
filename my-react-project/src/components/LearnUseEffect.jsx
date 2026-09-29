import {useEffect, useState} from 'react'

const LearnUseEffect = () => {

    // states
    const [count, setCount] = useState(0) 
    const [randomNum, setRandomNum] = useState(42)

    // count functions
    const decreaseCount = () => { 
        if (count != 0){
            setCount(count - 1);
            
        };
    }

    const increaseCount = () => { 
        setCount(count + 1); 
    }

    const resetCount = () => { 
        setCount(0); 
    }

    // random functions
    const generateRandom = () => {
        const randomNum = Math.floor(Math.random() * 100); 
        setRandomNum(randomNum)
    }

    // side effects 
    useEffect(()=> {
        //the logic goes here 
        console.log('use effect is called  ')
        
        // cleanup function
        return () => {
            console.log("cleanup function is called")
        }
    }, [randomNum])


  return (
    <>
        <h2>UseEffect to have SideEffect</h2>
        <h3>Count : {count}</h3>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
        <hr />
        <h3>Random Number: {randomNum}</h3>
        <button onClick={generateRandom}>GenerateAnother</button>

    </>
  )
}

export default LearnUseEffect
