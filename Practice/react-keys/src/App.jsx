import {useState} from "react"
let count = 3

function App() {
    const [todos, setTodo] = useState([{
        id: 1,
        title: "Gym",
        description: "At 7pm"
    },{
        id: 2,
        title: "Dinner",
        description: "At 10pm"
    },{
        id: 3,
        title: "Movie",
        description: "At 11pm"
    }])

    function addTodo(){
        setTodo([...todos,{
            id: ++count,
            title: Math.random(),
            description: Math.random()
        }])
    }

    return <>
    <button onClick={addTodo}>Add Todo</button>
    {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description} />
    })}
    </>

}
function Todo({title,description}) {
    return <>
    <h3>{title}: {description}</h3>
    </>
}

export default App