import { useEffect, useState } from "react"
import axios from "axios"
import './App.css'

function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
            .then((response) => {
                setTodos(response.data.todos)
            })
    }, [])
    return <>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
}

function Todo({title, description}) {
    return <>
    <div>{title} : {description}</div>
    </>
}
export default App