import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface ItemTaskProps {
  id: string;
  taskName: string;
  priority: 'Urgent' | 'Normal' | 'Casual';
  deleteTask: (id: string) => void;
}

const ItemTask = ({ id, taskName, priority, deleteTask }: ItemTaskProps) => {
  return (
    <li className='flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition' id={id}>
      <span>{taskName} ({priority})</span>
      <Checkbox />
      <Button variant="secondary" className='hover:bg-blue-500'>Edit Task</Button>
      <Button onClick={() => deleteTask(id)} variant="destructive" className='hover:bg-red-600'>
        Delete Task
      </Button>
    </li>
  );
};

export default ItemTask;
