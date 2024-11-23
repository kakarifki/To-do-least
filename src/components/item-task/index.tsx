// import { useNavigate } from 'react-router-dom';

interface Task {
  id: string;
  nameTodo: string;
  details: string;
  dueDate: string;
  category: string;
  status: 'todo' | 'progress' | 'done';
}

interface ItemTaskProps {
  task: Task;
  deleteTask: (id: string) => void;
  handleEditTaskStatus: (id: string, status: 'todo' | 'progress' | 'done') => void;
  onTaskClick: (task: Task) => void;
}

const ItemTask = ({ task, deleteTask, handleEditTaskStatus, onTaskClick }: ItemTaskProps) => {
  const handleClick = () => {
    onTaskClick(task);
  };

  const getNextStatus = () => {
    switch (task.status) {
      case 'todo': return 'progress';
      case 'progress': return 'done';
      default: return 'todo';
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col gap-1 cursor-pointer" onClick={handleClick}>
      <h3 className="text-xl font-semibold">{task.nameTodo}</h3>
      <p className="text-sm text-gray-600">{task.details}</p>
      <p className="text-xs text-gray-500">{task.dueDate}</p>
      <p className="text-xs text-gray-500">{task.category}</p>
      <div className="mt-2 flex space-x-2">
        <button
          className="bg-red-500 text-white py-1 px-2 rounded"
          onClick={e => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
        <button
          className="bg-green-500 text-white py-1 px-2 rounded"
          onClick={e => {
            e.stopPropagation();
            handleEditTaskStatus(task.id, getNextStatus());
          }}
        >
          Action
        </button>
      </div>
    </div>
  );
};

export default ItemTask;
