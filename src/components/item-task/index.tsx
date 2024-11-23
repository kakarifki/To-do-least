// src/components/item-task/index.tsx
// import { useState } from 'react';
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

  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col gap-1 relative">
      <h3 className="text-xl font-semibold cursor-pointer" onClick={handleNavigateToDetail}>{task.nameTodo}</h3>
      <p className="text-sm text-gray-600 cursor-pointer" onClick={handleNavigateToDetail}>{task.details}</p>
      <p className="text-xs text-gray-500 cursor-pointer" onClick={handleNavigateToDetail}>{task.dueDate}</p>
      <p className="text-xs text-gray-500 cursor-pointer" onClick={handleNavigateToDetail}>{task.category}</p>
      <div className="absolute right-2 top-2 flex gap-2">
        <Button
          className="bg-green-500 text-white py-1 px-2 rounded"
          onClick={() => handleEditTaskStatus(task.id, 'progress')}
        >
          Progress
        </Button>
        <Button
          className="bg-blue-500 text-white py-1 px-2 rounded"
          onClick={() => handleEditTaskStatus(task.id, 'done')}
        >
          Done
        </Button>
        <Button
          className="bg-red-500 text-white py-1 px-2 rounded"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ItemTask;
