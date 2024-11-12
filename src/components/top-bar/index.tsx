import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const TopBar = () => {
  return (
    <>
<div className='container mx-auto px-4 flex flex-col'>
  <h1 className='mx-auto'>To-do-list</h1>
  <div className='flex mx-16'>
    <Input />
  <Button variant="outline">Add Task</Button>
  </div>
</div>
    </>
  )
}

export default TopBar