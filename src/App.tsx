import { useState } from "react"
import './App.css'

const INITIAL_TODOS = [
  {id: 1, done: false, text: 'Take the cat out for a walk'},
  {id: 2, done: false, text: 'Get groceries'},
  {id: 3, done: true, text: 'Pick up laundry'}
]

function App() {
  const [lastTodoId, setLastTodoId] = useState(3)
  const [todos, setTodos] = useState(INITIAL_TODOS)
  const [newTodo, setNewTodo] = useState('')

  function addTodo() {
    const newTodoObj = {
      id: lastTodoId + 1,
      done: false,
      text: newTodo
    }

    setNewTodo('')
    setTodos(prev => [...prev, newTodoObj])
    setLastTodoId(prev => prev++)
  }

  function deleteTodo(id: number) {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  return (
    <>
      <h1>Todo List</h1>
        <form className="todo-form">
          <input type="text" placeholder="Enter todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="button" onClick={() => addTodo()}>Add new todo</button>
        </form>
        <ul className="todo-list">
            {todos.map((t) => (
              <li key={t.id}>
                <input type="checkbox" checked={t.done} />
                <span>{t.text}</span>
                <button type="button" onClick={() => deleteTodo(t.id)}>Delete</button>
              </li>
            ))}
        </ul>
    </>
  )
}

export default App
