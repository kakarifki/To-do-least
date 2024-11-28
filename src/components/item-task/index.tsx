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

  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col gap-1 relative">
      <div className="flex items-center gap-2 mb-2">
        <span className={`${statusColors[task.status]} text-white text-xs px-2 py-1 rounded-full`}>
          {statusLabels[task.status]}
        </span>
      </div>
      <h3 className="text-xl font-semibold cursor-pointer" onClick={handleNavigateToDetail}>{task.nameTodo}</h3>
      <p className="text-sm text-gray-600 cursor-pointer" onClick={handleNavigateToDetail}>{task.details}</p>
      <p className="text-xs text-gray-500 cursor-pointer" onClick={handleNavigateToDetail}>{task.dueDate}</p>
      <p className="text-xs text-gray-500 cursor-pointer" onClick={handleNavigateToDetail}>{task.category}</p>
      <div className="absolute right-2 top-2 flex gap-2">
        {task.status !== 'progress' && (
          <Button
            variant="outline"
            size="sm"
            className="border-yellow-500 hover:bg-yellow-500 hover:text-white"
            onClick={() => handleEditTaskStatus(task.id, 'progress')}
          >
            Progress
          </Button>
        )}
        {task.status !== 'done' && (
          <Button
            variant="outline"
            size="sm"
            className="border-green-500 hover:bg-green-500 hover:text-white"
            onClick={() => handleEditTaskStatus(task.id, 'done')}
          >
            Done
          </Button>
        )}
        <Button
          variant="destructive"
          size="sm"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ItemTask;
