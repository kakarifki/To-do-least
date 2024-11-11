// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/index.css'
// import HomePage from './components/homepage'
import { Button } from "@/components/ui/button"
// import Carausell from './components/carausell'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"


function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
<div className='container mx-auto px-4 flex flex-col'>
  <h1 className='mx-auto'>To-do-list</h1>
  <div className='flex mx-16'>
    <Input />
  <Button variant="outline">Add Task</Button>
  </div>
</div>
<div className='container mx-auto'>
<h2 className='flex justify-center'>Task List</h2>
<ul className='flex flex-col gap-4'>
  <li className='flex justify-around items-center p-4'>
    Task 1
    <Checkbox />
    <Button variant="secondary">Edit Task</Button>
    <Button variant="destructive">Delete Task</Button>
  </li>
  <li className='flex justify-around items-center p-4'>
    Task 2
    <Checkbox />
    <Button variant="secondary">Edit Task</Button>
    <Button variant="destructive">Delete Task</Button>
  </li>
</ul>
</div>



        </>
    )
}

export default App
