import { ComponentPropsWithRef, useState } from "react";

export interface TodoProps extends ComponentPropsWithRef<'li'> {
    isDone?: boolean
    text?: string
    onDelete?: () => void
    onToggleDone?: (checked: boolean) => void
}

export default function Todo(props: TodoProps) {
    const { isDone, text, onDelete, onToggleDone, ...rest } = props

    const [done, setDone] = useState(isDone || false)

    function handleDelete() {
        if (onDelete) {
            onDelete()
        }
    }

    function handleToggleDone(checked: boolean) {
        setDone(checked)
        if (onToggleDone) {
            onToggleDone(checked)
        }
    }

    return (
        <li {...rest}>
            <input
                type="checkbox"
                checked={done}
                onChange={(e) => handleToggleDone(e.target.checked)}
            />
            <span>{text}</span>
            <button
                type="button"
                onClick={() => handleDelete()}
            >
                Delete
            </button>
        </li>
    )
}