import {useState} from 'react'

const LearnConditionalRendering = () => {
  
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [status, setStatus] = useState(true)

    return (
    <>
       <h1>ConditionalRendering</h1>

       {
        isLoggedIn? (<h3>Welcome, User!</h3>) : (<button onClick={()=> setIsLoggedIn(true)}>Login</button>)
       }
       
       {
        status && (<h3>Show Data</h3>)
       }
    </>
  )
}

export default LearnConditionalRendering
