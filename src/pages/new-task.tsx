import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { useTasks } from '@/context/task-context';
import { useNavigate } from 'react-router-dom';

interface TaskForm {
  taskName: string;
  details: string;
  dueDate: string;
  category: string;
}

const NewTask: FC = () => {
  const { addTask } = useTasks();
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit, reset } = useForm<TaskForm>();

  const onSubmit = (data: TaskForm) => {
    addTask(data.taskName, data.details, data.dueDate, data.category);
    reset();
    navigate('/');
  };

  const onCancel = () => {
    reset();
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">Add New Task</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Task Name" {...register('taskName', { required: 'Harus diisi oy' })} />
        <ErrorMessage
          errors={errors}
          name="taskName"
          render={({ message }) => <p className='bg-red-400'>{message}</p>}
        />
        <Input placeholder="Task Details" {...register('details', {
          required: "This is required.",
          maxLength: {
            value: 10,
            message: "This input exceed maxLength.",
          },
        })} />
        <ErrorMessage
          errors={errors}
          name="details"
          render={({ message }) => <p className='bg-red-400'>{message}</p>}
        />
        <Input type="date" {...register('dueDate')} />
        {/* Select with shadcn start*/}
        <Select
          onValueChange={(value: string) => register('category').onChange({ target: { value } })}
        >
          <SelectTrigger className="border rounded p-2">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Work">Work</SelectItem>
            <SelectItem value="Home">Home</SelectItem>
            <SelectItem value="Hobby">Hobby</SelectItem>
          </SelectContent>
        </Select>
        {/* Select with shadcn end*/}
        <div className="flex gap-2">
          <Button type="submit" variant="outline" className="bg-blue-600 text-white">
            Submit
          </Button>
          <Button type="button" variant="outline" className="bg-red-600 text-white" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
