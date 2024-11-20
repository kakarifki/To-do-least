import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message"
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
  const { register, formState: { errors }, handleSubmit, reset } = useForm<TaskForm>();

  const onSubmit = (data: TaskForm) => {
    addTask(data.taskName, data.details, data.dueDate, data.category);
    reset();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">Add New Task</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Task Name" {...register('taskName', {required: 'Harus diisi oy'})} />
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
          },})} />
          <ErrorMessage
        errors={errors}
        name="details"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      />
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
