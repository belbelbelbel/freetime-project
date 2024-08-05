import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

interface Task {
    id: number;
    text: string;
    complete: boolean;
}

export const Todo = () => {
    const [Tasks, setTasks] = useState<Task[]>([])
    const [input, setInput] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const addTodo = () => {
        if (input) {
            const newTask: Task = {
                id: Date.now(),
                text: input,
                complete: false
            }
            setTasks([...Tasks, newTask])
            console.log("Task added")
            setInput("")
        } else {
            alert('Please enter a task')
        }
    }

    const handlekeyBoardevent = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            addTodo();
          }
    }

    const removeTodo = (id: number) => {
        const removedTasks = Tasks.filter((task) => task.id !== id)
        setTasks(removedTasks)
    }

    const toggleComplete = (id: number) => {
        const newTasks = Tasks.map((task) =>
            task.id === id ? { ...task, complete: !task.complete } : task
        )
        setTasks(newTasks)
    }

    return (
        <div>
            <div className='w-screen h-[6vw] bg-black flex items-center justify-center gap-[3vw]'>
                <input
                    type="text"
                    className='w-[80%] border-none outline-none px-[2vw] py-[0.8vw] rounded-[1vw]'
                    value={input}
                    placeholder='Todo...'
                    onKeyDown={ handlekeyBoardevent}
                    onChange={handleChange}
                />
                <button className='text-[1vw] bg-white px-8 py-2 rounded-[3px]' onClick={addTodo}>Add</button>
            </div>
            <ul className='w-[90%] mx-auto '>
                {Tasks.map((task) => (
                    <li key={task.id} className={` flex flex-col  ${task.complete ? "line-through" : ""}`}>
                        <div>
                            <input
                                type="checkbox"
                                checked={task.complete}
                                onChange={() => toggleComplete(task.id)}
                            />
                            {task.text}
                        </div>
                        <button onClick={() => removeTodo(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
