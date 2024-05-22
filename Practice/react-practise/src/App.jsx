import React, { useState } from "react";
import { useEffect , memo} from "react"


function App() {

  const [title, setTitle] = useState("My name is Shahbaz")

  function changeTitle(){
    setTitle("My name is " + Math.random());
  }
  
  return (
    <div>
      <HeaderWithButton />
      <button onClick={changeTitle}>Change Title</button><br /><br />
      <Header title={title} />
      <Header title="singsdfsh" />
      <Header title="singfsdsh" />
      <Header title="singfsdsh" />
      <Header title="singfsdsh" />
      <Header title="singfsdsh" />
    </div>
  )
  
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is Shahbaz")

  function changeTitle(){
    setTitle("My name is " + Math.random());
  }

  return <div>
    <button onClick={changeTitle}>Change Title</button><br /><br />
    <Header title={title} />
  </div>
}

const Header = memo(function Header({title}) {
  return <div>
    {title}
  </div>
})


export default App