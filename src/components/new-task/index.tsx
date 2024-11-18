import { useState } from 'react';
import { useTaskContext } from '../../components/task-context.tsx';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewTask = () => {
  const { addTask } = useTaskContext();
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState<'Urgent' | 'Normal' | 'Casual'>('Normal');

  const handleSubmit = () => {
    if (taskName) {
      addTask(taskName, priority); // Menambahkan task baru ke context
      setTaskName(''); // Reset input setelah menambahkan
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-lg font-semibold mb-2'>Add New Task</h2>
      <div className='flex flex-col gap-2'>
        <Input
          placeholder='Task Name'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'Urgent' | 'Normal' | 'Casual')}
          className='border rounded p-2'
        >
          <option value='Urgent'>Urgent</option>
          <option value='Normal'>Normal</option>
          <option value='Casual'>Casual</option>
        </select>
        <Button onClick={handleSubmit} variant='outline' className='bg-blue-600 text-white'>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default NewTask;
