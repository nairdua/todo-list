import { useEffect, useState } from "react"
import './App.css'
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"

const INITIAL_TODOS = [
  {id: 1, done: false, text: 'Take the cat out for a walk'},
  {id: 2, done: false, text: 'Get groceries'},
  {id: 3, done: true, text: 'Pick up laundry'}
]

function App() {
  const [lastTodoId, setLastTodoId] = useState(3)
  const [todos, setTodos] = useState(INITIAL_TODOS)

  function addTodo(newTodo: string) {
    const newTodoObj = {
      id: lastTodoId + 1,
      done: false,
      text: newTodo
    }

    setTodos(prev => [...prev, newTodoObj])
    setLastTodoId(prev => prev + 1)
  }

  function deleteTodo(id: number) {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <h1>Todo List</h1>
        <TodoForm onAddTodo={addTodo} />
        <ul className="todo-list">
            {todos.map((t) => (
              <Todo key={t.id} text={t.text} isDone={t.done} onDelete={() => deleteTodo(t.id)} />
            ))}
        </ul>
    </>
  )
}

export default App
