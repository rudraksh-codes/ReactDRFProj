
const LearnEvent = () => {
    const handleClick = ()=> {
        console.log("button clicked")
    }

    let count = 1
    const handleClickAgain = (param) => {
        console.log(`${param} ${count} time`)
        count = count + 1;
    }
  return (
    <>
    <button onClick={handleClick}>Click here</button>
    <button onClick={()=> {handleClickAgain("clicked again")}}>Click Again</button>
    </>
  )
}

export default LearnEvent
