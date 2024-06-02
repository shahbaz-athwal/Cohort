import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';

interface TodoType {
  id: number;
  title: string;
  description: string;
}

interface TodoInput {
  todo: TodoType[];
}

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then((response: any) => {
        setTodos(response.data.todos);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <RenderTodo todo={todos} />
    </>
  );
}

function RenderTodo( {todo}: TodoInput) {
  return (
    <div>
      {todo.map((todo: TodoType) => (
        <div key={todo.id}>
          <h3>Title: {todo.title}</h3>
          <p>ID: {todo.id}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
