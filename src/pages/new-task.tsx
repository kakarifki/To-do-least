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
  const { register, formState: { errors }, handleSubmit, reset, setValue, watch } = useForm<TaskForm>();

  const today = new Date().toISOString().split('T')[0];

  const onSubmit = (data: TaskForm) => {
    console.log('Submitting task data:', data);
    addTask(data.taskName, data.details, data.dueDate, data.category);
    reset();
    navigate('/');
  };

  const onCancel = () => {
    reset();
    navigate('/');
  };

  const categoryValue = watch('category');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-blue-500 rounded-full" />
          <h2 className="text-2xl font-bold text-gray-800">Create New Task</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Task Name</label>
            <Input
              placeholder="Enter task name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register('taskName', { required: 'Task name is required' })}
            />
            <ErrorMessage
              errors={errors}
              name="taskName"
              render={({ message }) => (
                <p className='text-sm text-red-500 flex items-center gap-1'>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {message}
                </p>
              )}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Details</label>
            <textarea
              placeholder="Enter task details"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
              {...register('details', {
                required: "Task details are required",
                maxLength: {
                  value: 500,
                  message: "Details cannot exceed 500 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="details"
              render={({ message }) => (
                <p className='text-sm text-red-500 flex items-center gap-1'>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {message}
                </p>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Due Date</label>
              <Input
                type="date"
                min={today}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register('dueDate', {
                  required: 'Due date is required',
                  validate: value => {
                    const selectedDate = new Date(value);
                    const todayDate = new Date(today);
                    return selectedDate >= todayDate || 'Cannot select past dates';
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="dueDate"
                render={({ message }) => (
                  <p className='text-sm text-red-500 flex items-center gap-1'>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {message}
                  </p>
                )}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <Select
                onValueChange={(value) => {
                  setValue('category', value, { shouldValidate: true });
                }}
                value={categoryValue}
              >
                <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Work">Work</SelectItem>
                  <SelectItem value="Home">Home</SelectItem>
                  <SelectItem value="Hobby">Hobby</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" {...register('category', { required: 'Category is required' })} />
              <ErrorMessage
                errors={errors}
                name="category"
                render={({ message }) => (
                  <p className='text-sm text-red-500 flex items-center gap-1'>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {message}
                  </p>
                )}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white shadow-sm hover:shadow-md transition-all duration-200 font-medium px-6"
            >
              Create Task
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-2 border-gray-300 hover:bg-gray-100 shadow-sm hover:shadow-md transition-all duration-200 font-medium"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
