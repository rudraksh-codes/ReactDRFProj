import React from 'react'


const bb = React.createElement("h3", null, "BalleBalle")
const price = React.createElement("h2", null, `Price: ${10+20}`)
const LearnJSX = () => {
    let up = "GOING UP !";
    let dynamicClass = "Dark";
    return (
   <>
    {bb}{bb}
    {price}
    <h2>Price {10+20}</h2>
    <h3>Stock:{up}</h3>
    <h1 class='bg-success'>Class</h1>
    <h1 className={dynamicClass}>Class</h1>

   </>
  )
}

export default LearnJSX
