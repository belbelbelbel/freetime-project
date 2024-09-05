import React from 'react'
import { Buttons } from './Buttons'
import { Input } from './Input'

export const Counter = () => {
    const [count, setCount] = React.useState(0)
    const [value, setValue] = React.useState("")

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if(count <= 0){
            setCount(0)
        }
        else{
            setCount(count - 1)
        }
    }
    console.log(count)

    return (
        <div className='flex flex-col justify-center h-screen w-screen'>
            <div className='w-[80%] mx-auto flex  items-center flex-col justify-center'>
                <p>Count: {count}</p>
                <div className=' w-[60%]'>
                    <Buttons color="bg-green-400"  onClick={increment} border="rounded-[5px]" label="Increament"></Buttons>
                    <Buttons color="bg-red-400" onClick={decrement} border="rounded-[5px]" label="Decreament"></Buttons>
                    <Input type="number" placeholder="Type Here.." value={count} onChange={(e:any)=> setCount(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}
