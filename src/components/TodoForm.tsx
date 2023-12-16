import React, { ComponentPropsWithRef, useState } from "react";

export interface TodoFormProps extends ComponentPropsWithRef<'form'> {
    onAddTodo?: (newTodo: string) => void
}

export default function TodoForm(props: TodoFormProps) {
    const { onAddTodo, ...rest } = props

    const [newTodo, setNewTodo] = useState('')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (onAddTodo) {
            onAddTodo(newTodo)
        }
        setNewTodo('')
    }

    return (
        <form onSubmit={handleSubmit} {...rest}>
        <input
            type="text"
            placeholder="Enter todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button>Add new todo</button>
        </form>
    )
}