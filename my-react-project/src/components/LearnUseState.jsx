import { useState } from "react"

const LearnUseState = () => {
    const [num, setNum] = useState(5);
    console.log(num)

const handleNum = () => {
    let newNum = num + 1
    setNum(newNum)
}
  return (
    <>
        <h3>Use State Number:{num}</h3>
        <button onClick={handleNum}>Click Here</button>
    </>
  )
} 

export default LearnUseState
