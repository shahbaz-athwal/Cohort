import { useEffect, useState } from "react"
import axios from "axios"
import './App.css'

function App() {
    
    const [id, setId] = useState(1)
    return <>
    <button onClick={function(){
        setId(4)
    }}>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <Todo id={id}/>
    </>
    
}


function Todo({id}) {
    const [todo, setTodo] = useState([])

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
            .then((response) => {
                setTodo(response.data.todo)
            })
    }, [id])

    return <>
    <h3>{todo.title} : {todo.description}</h3>
    </>
}
export default App