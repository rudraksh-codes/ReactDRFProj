import React from 'react'
import { StockContext, UserContext } from '../App'


const ChildC = () => {
  return (
    <>
        <StockContext.Consumer>
            {/* function with a single argument only */}
            {
                ({stock, price})=> {    //{/*destructuring */}
                    return (
                        <UserContext.Consumer>
                            {
                                ({user, setUser}) => {
                                    return(
                                        <>
                                            <h2>ChildC - {stock}: {price} </h2>
                                            <h1>User:{user.name}</h1>
                                            <h1>LoggedIn?: {user.isLoggedIn}</h1>
                                            
                                        </>
                                    )
                                }
                            }
                        </UserContext.Consumer>
                ); 
                }
            }
        </StockContext.Consumer>
    </> 
  )
}

export default ChildC
