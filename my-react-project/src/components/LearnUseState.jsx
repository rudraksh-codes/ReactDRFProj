import { useState } from "react"

const LearnUseState = () => {
    const [num, setNum] = useState(0);
    console.log(num)

    const [stockPrice, setStockPrice] = useState({"stock": "Apple", "price": 99})
    console.log(stockPrice)

const handleNum = () => {
    let newNum = num + 1
    setNum(newNum)
}

    const handlePrice = () => {
        let newStockPrice = stockPrice.price + 500
        setStockPrice({...stockPrice, price : newStockPrice})
    }
  return (
    <>
        <h3>Use State Number:{num}</h3>
        <button onClick={handleNum}>Click Here</button>
        <br /><hr />
        <h2>{stockPrice.stock}: {stockPrice.price}</h2>
        <button onClick={handlePrice}>Increase Price by 500</button>

    </>
  )
} 

export default LearnUseState
