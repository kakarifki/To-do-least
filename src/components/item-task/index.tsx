import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface ItemTaskProps {
    id: string;
    taskName: string;
}

const ItemTask = ({ id, taskName }: ItemTaskProps) =>  {
    return (
        <li className='flex justify-around items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition' id={id}>
            {taskName}
            <Checkbox />
            <Button variant="secondary" className='hover:bg-blue-500'>Edit Task</Button>
            <Button variant="destructive" className='hover:bg-red-600'>Delete Task</Button>
        </li>
    );
};

export default ItemTask;