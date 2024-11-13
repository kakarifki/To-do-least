import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const ListTask = () => {
  return (
    <>
    <div className='container mx-auto mt-4'>
        <h2 className='flex justify-center text-xl font-semibold text-gray-700'>Task List</h2>
        <ul className='flex flex-col gap-4 mt-4'>
          <li className='flex justify-around items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition'>
            Task 1
            <Checkbox />
            <Button variant="secondary" className='hover:bg-blue-500'>Edit Task</Button>
            <Button variant="destructive" className='hover:bg-red-600'>Delete Task</Button>
          </li>
          <li className='flex justify-around items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition'>
            Task 2
            <Checkbox />
            <Button variant="secondary" className='hover:bg-blue-500'>Edit Task</Button>
            <Button variant="destructive" className='hover:bg-red-600'>Delete Task</Button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ListTask