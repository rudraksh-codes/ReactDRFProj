
const LearnLiftingSatateUp = (props) => {
    const handleClick = () => {
            let stock = "tesla"
            props.fun(stock)
    }
  return (
    <>
        <h2>Lifting State UP</h2>
        <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default LearnLiftingSatateUp
