import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const ListTask = () => {
  return (
    <>
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

export default ListTask