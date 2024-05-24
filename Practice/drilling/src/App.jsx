import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const CountContext = createContext({
  count:10
})

function App() {
  const [count, setCount] = useState(0);

  return <>
  <CountContext.Provider value={{count,setCount}}>
  <Count count={count} setCount={setCount}/>
  </CountContext.Provider>
  </>
}

function Count() {
  return <>

  <CountRender />
  <Buttons  />
  </>
}

function CountRender({}) {
  const {count} = useContext(CountContext)
  return <div>
    {count} </div>
}

function Buttons() {

  const {count,setCount} = useContext(CountContext)

  return<>
  <button onClick={() =>{
    setCount(count+1)
  }}>Increase</button>
  <button onClick={() => {
    setCount(count-1)
  }}>Decrease</button>
  </>

}


export default App;