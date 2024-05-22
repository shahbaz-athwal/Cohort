import React, { useState } from "react";
import { useEffect } from "react"


function App() {
  
  const [title, setTitle] = useState("My name is Shahbaz")

  return (
    <div>
      <button onClick={changeTitle}>Change Title</button><br /><br />
      <Header title={title} />
      <Header title="sinfgfhggh" />
      <Header title="singsdfsh" />
      <Header title="singfsdsh" />
    </div>
  )

  function changeTitle(){
    setTitle("My name is " + Math.random());
  }
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App