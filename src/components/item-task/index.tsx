import { useNavigate } from 'react-router-dom';
import { Task } from '@/data/initialTasks';
import { Button } from '@/components/ui/button';

interface ItemTaskProps {
  task: Task;
  deleteTask: (id: string) => void;
  handleEditTaskStatus: (id: string, newStatus: Task['status']) => void;
}

const ItemTask = ({ task, deleteTask, handleEditTaskStatus }: ItemTaskProps) => {
  const navigate = useNavigate();

  const handleNavigateToDetail = () => {
    navigate(`/task/${task.id}`);
  };

  const statusColors = {
    todo: 'bg-red-500',
    progress: 'bg-yellow-500',
    done: 'bg-green-500'
  } as const;

  const statusLabels = {
    todo: 'To Do',
    progress: 'In Progress',
    done: 'Done'
  } as const;

  const renderStatusButton = () => {
    if (task.status === 'todo') {
      return (
        <Button
          variant="outline"
          size="sm"
          className="border-2 border-yellow-500 bg-yellow-50 hover:bg-yellow-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-200 font-medium"
          onClick={() => handleEditTaskStatus(task.id, 'progress')}
        >
          Move to Progress
        </Button>
      );
    }
    if (task.status === 'progress') {
      return (
        <Button
          variant="outline"
          size="sm"
          className="border-2 border-green-500 bg-green-50 hover:bg-green-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-200 font-medium"
          onClick={() => handleEditTaskStatus(task.id, 'done')}
        >
          Mark as Done
        </Button>
      );
    }
    return null;
  };

  return (
    <div className="group bg-white p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 relative">
      <div className="flex items-center gap-2 mb-3">
        <span 
          className={`${statusColors[task.status]} text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm
          ring-2 ring-offset-2 ${statusColors[task.status].replace('bg-', 'ring-')}/30`}
        >
          {statusLabels[task.status]}
        </span>
      </div>

      <div className="space-y-3" onClick={handleNavigateToDetail}>
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 cursor-pointer transition-colors duration-200">
          {task.nameTodo}
        </h3>
        <p className="text-sm text-gray-600 cursor-pointer group-hover:text-gray-700">
          {task.details}
        </p>
        <div className="flex items-center gap-6 pt-2">
          <p className="text-xs text-gray-500 flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {task.dueDate}
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {task.category}
          </p>
        </div>
      </div>

      <div className="absolute right-4 top-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100">
        {renderStatusButton()}
        <Button
          variant="destructive"
          size="sm"
          className="bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border-2 border-red-500 shadow-sm hover:shadow-md transition-all duration-200 font-medium"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ItemTask;
