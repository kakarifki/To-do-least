// src/components/task-list/index.tsx
import { FC } from 'react';
import { Task } from '@/data/initialTasks';
import ItemTask from '../item-task';
// import { Button } from '@/components/ui/button';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  handleEditTaskStatus: (id: string, newStatus: Task['status']) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, deleteTask, handleEditTaskStatus }) => {
  return (
    <div className="container mx-auto p-4">
      {tasks.length > 0 ? (
        <>
          {tasks.map((task) => (
            <ItemTask 
              key={task.id} 
              task={task} 
              deleteTask={deleteTask}
              handleEditTaskStatus={handleEditTaskStatus}
            />
          ))}
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-lg font-semibold pb-4">
            No tasks available.
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
