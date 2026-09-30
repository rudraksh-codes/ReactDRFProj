import HelloWorld from './components/HelloWorld.jsx'
import LearnReact from './components/LearnReact.jsx'
import LearnJSX from './components/LearnJSX.jsx'
import LearnProps from './components/LearnProps.jsx'
import LearnEvent from './components/LearnEvent.jsx'
import LearnLiftingSatateUp from './components/LearnLiftingSatateUp.jsx'
import LearnUseState from './components/LearnUseState.jsx'
import CounterApp from './components/CounterApp.jsx'
import LearnUseEffect from './components/LearnUseEffect.jsx'
import LearnUseMemo from './components/LearnUseMemo.jsx'
import ChildA from './components/ChildA.jsx'
import { createContext, useState } from 'react'
import LearnUseRef from './components/LearnUseRef.jsx'
import LearnCustomHooks from './components/LearnCustomHooks.jsx'

// step 1 (create context - outside the component)
const StockContext = createContext()
const UserContext = createContext()

function App() {
  let price = 200
  const stock = "Tesla";
  const [user, setUser] = useState({name:"Rudra", isLoggedIn: 'Yes'})

  const getStock = (param)=>{
    console.log(`this data is coming from the child to parent component App : ${param}`)
  }

  return (
    <>
      {/* <h1>App Component</h1> */}
      {/* <LearnProps stock="this is a test prop data " price={price}/> */}
      {/* <LearnJSX/>
      <h1>Learn React</h1>
      <HelloWorld />
      <LearnReact/> */}
      {/* <LearnEvent />
      <LearnLiftingSatateUp fun = {getStock}/>   */}
      {/* <LearnUseState /> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect/> */}
      {/* <LearnUseMemo/> */}
      
      
      {/* // step 2 */}
      {/* <StockContext.Provider value = {{stock, price}}>
        <UserContext.Provider value = {{user, setUser}}>
          <ChildA />
        </UserContext.Provider>
      </StockContext.Provider> */}
      {/* <LearnUseRef/> */}
      <LearnCustomHooks/>

      
    </>
  )
}

export default App
export {StockContext, UserContext}
   