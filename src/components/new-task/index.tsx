import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface TaskForm {
  taskName: string;
  details: string;
  dueDate: string;
  category: string;
}

interface NewTaskProps {
  addTask: (nameTodo: string, details: string, dueDate: string, category: string) => void;
}

const NewTask = ({ addTask }: NewTaskProps) => {
  const { register, handleSubmit, reset } = useForm<TaskForm>();

  const onSubmit = (data: TaskForm) => {
    addTask(data.taskName, data.details, data.dueDate, data.category);
    reset();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">Add New Task</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Task Name" {...register('taskName')} />
        <Input placeholder="Task Details" {...register('details')} />
        <Input type="date" {...register('dueDate')} />
        <select className="border rounded p-2" {...register('category')}>
          <option value="Work">Work</option>
          <option value="Home">Home</option>
          <option value="Hobby">Hobby</option>
        </select>
        <Button type="submit" variant="outline" className="bg-blue-600 text-white">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewTask;
