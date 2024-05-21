import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setCount] = useState([{
    title: "Go to gym",
    description: " at 7 pm",
    commpleted: false
  }, {
    title: "Dinner",
    description: " at 9 pm",
    commpleted: false
  }])

  return (
    <div>
      <Todo title={ todos[0].title } description={todos[0].description} />
      <Todo title={ todos[1].title } description={todos[1].description} />
      todos.map(function(todo){
        to
      })
    </div>
  )
  
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
    </div>
}
export default App
