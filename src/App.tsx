// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/index.css'
// import HomePage from './components/homepage'
import { Button } from '@/components/ui/button'
// import Carausell from './components/carausell'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
            {/* <HomePage />
            <p className="bg-red-600">Nyoba teks</p>
            <div>
                <h1>Jangan lupa oyyy</h1>
            </div>
            <Button variant="outline">tombol buttton dari shacdn</Button>
      <Carausell /> */}
            <div className="container mx-auto px-4 flex">
                <h1 className="">To-do-list</h1>
                <div>
                    <Input />
                    <Button variant="outline">Add Task</Button>
                </div>
            </div>
            <div className="container mx-auto">
                <h2 className="flex justify-center">Task List</h2>
                <ul className="flex flex-col gap-4">
                    <li>
                        <p>Task 1</p>
                        <Checkbox />
                        <Button variant="secondary">Edit Task</Button>
                        <Button variant="destructive">Delete Task</Button>
                    </li>
                    <li>
                        <p>Task 2</p>
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
