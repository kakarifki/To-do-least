import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const TopBar = () => {
  return (
    <>
<div className='container mx-auto px-4 flex flex-col bg-blue-50 p-4 rounded shadow-md'>
        <h1 className='mx-auto text-2xl font-bold text-blue-700'>To-do-list</h1>
        <div className='flex mx-16 gap-2'>
          <Input className='flex-1 border-blue-300 focus:ring focus:ring-blue-200' placeholder='Add a new task...' />
          <Button variant="outline" className='bg-blue-600 text-white hover:bg-blue-700'>Add Task</Button>
        </div>
      </div>
    </>
  )
}

export default TopBar