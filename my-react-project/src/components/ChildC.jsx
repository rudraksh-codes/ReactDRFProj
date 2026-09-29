import {useContext} from 'react'
import { StockContext, UserContext} from '../App'


const ChildC = () => {
    const stockData = useContext(StockContext)
    const userData = useContext(UserContext)

  return (
    <>

        <h2>ChildC-- {stockData.stock}:{stockData.price}</h2>
        <h1>ChildC-- {userData.user.name}, LoggedIn?:{userData.user.isLoggedIn}</h1>


        {/* <StockContext.Consumer>
            {
                ({stock, price})=> {    //destructuring 
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
        </StockContext.Consumer> */}
    </> 
  )
}

export default ChildC
