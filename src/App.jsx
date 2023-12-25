import { useState } from 'react'
import { v4 as uuid } from "uuid";

import { Todo } from "./components/Todo/Todo";
import './App.css'

function App() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [todos, setTodos] = useState([]);

  function createTodo() {
    const newTodo = [...todos, {id: uuid(), title, description}]
    setTodos(newTodo)

    setTitle('')
    setDescription('')

  }

  function deleteTodo(todo) {
    const newTodo = todos.filter((item) => item.id !== todo.id)
    setTodos(newTodo)
  }

  function upDateTodo(upDateTodo) {
    const newTodos = todos.map((todo) => {
      if (todo.id === upDateTodo.id) {
        return upDateTodo;
      }else{
        return todo
      }
    })

    setTodos(newTodos)
  }
  return (
    <div>
      <form>
        <input 
        type="text"
        value={title}
        placeholder='title'
        onChange={(event) => setTitle(event.target.value)}/>

        <input 
        type="text"
        value={description} 
        placeholder='description'
        onChange={(event) => setDescription(event.target.value)}/>

        <button onClick={(event) => {
          event.preventDefault();
          createTodo();
        }}>add</button>

      </form>
      <div className='todo-container'>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} upDateTodo={upDateTodo}/>
        })}
      </div>
    </div>
  )
}

export default App
