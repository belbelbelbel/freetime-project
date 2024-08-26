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
            setInput("")
        } else {
            alert('Please enter a task')
        }
    }
    const handlekeyBoardevent = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }
    const removeTodo = (id: number) => {
        const removedTasks = Tasks.filter((task) => task.id !== id)
        //The condition task.id !== id means "keep all tasks whose id is not equal to the given id
        console.log(removedTasks)
        setTasks(removedTasks)
    }
    const toggleComplete = (id: number) => {
        const newTasks = Tasks.map(task => {
            if (task.id === id) {
                return { ...task, complete: !task.complete };
            }
            return task;
        });
        setTasks(newTasks);
    } 
    const thirdHighest = (arr: number[]) => {
        if (arr.length < 3) {
            alert('The array must contain at least three numbers');
            return null;
        }
    
        let firstnumber = -Infinity;
        let secondnumber = -Infinity;
        let thirdnumber = -Infinity;
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > firstnumber) {
                thirdnumber = secondnumber;
                secondnumber = firstnumber;
                firstnumber = arr[i];
            } else if (arr[i] > secondnumber && arr[i] < firstnumber) {
                thirdnumber = secondnumber;
                secondnumber = arr[i];
            } else if (arr[i] > thirdnumber && arr[i] < secondnumber) {
                thirdnumber = arr[i];
            }
        }
    
        return thirdnumber;
    }
    
    const arrays = [10, 12, 13, 15, 34, 100];
    // console.log(thirdHighest(arrays)); 
    return (
        <div>
            <div className='w-screen h-[6vw] bg-black flex items-center justify-center gap-[3vw]'>
                <input
                    type="text"
                    className='w-[80%] border-none outline-none px-[2vw] py-[0.8vw] rounded-[1vw]'
                    value={input}
                    placeholder='Todo...'
                    onKeyDown={handlekeyBoardevent}
                    onChange={handleChange}
                />
                <button className='text-[1vw] bg-white px-8 py-2 rounded-[3px]' onClick={addTodo}>Add</button>
            </div>
            <ul className='w-[90%] mx-auto'>
                {Tasks.map((task) => (
                    <li key={task.id} className={`flex flex-col ${task.complete ? "line-through" : ""}`}>
                        <div>
                            <input
                                type="checkbox"
                                checked={task.complete}
                                onChange={() => toggleComplete(task.id)}
                            />
                            {task.text}
                        </div>
                        <button onClick={ () => removeTodo(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
