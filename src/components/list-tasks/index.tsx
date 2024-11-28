import { FC } from 'react';
import { Task } from '@/data/initialTasks';
import ItemTask from '../item-task';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  handleEditTaskStatus: (id: string, newStatus: Task['status']) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, deleteTask, handleEditTaskStatus }) => {
  const todoTasks = tasks.filter(task => task.status === 'todo');
  const progressTasks = tasks.filter(task => task.status === 'progress');
  const doneTasks = tasks.filter(task => task.status === 'done');

  const TaskRow = ({ title, tasks, bgColor }: { title: string; tasks: Task[]; bgColor: string }) => (
    <div className={`w-full ${bgColor} rounded-lg p-4 mb-4`}>
      <h2 className="text-lg font-bold mb-4 text-white">{title}</h2>
      <div className="flex flex-row gap-4 overflow-x-auto pb-4">
        {tasks.map((task) => (
          <div key={task.id} className="w-[300px] flex-shrink-0">
            <ItemTask 
              task={task} 
              deleteTask={deleteTask}
              handleEditTaskStatus={handleEditTaskStatus}
            />
          </div>
        ))}
        {tasks.length === 0 && (
          <div className="bg-white/50 rounded-lg p-4 text-center w-[300px] flex-shrink-0">
            <p className="text-gray-600">No tasks</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <TaskRow 
        title="To Do" 
        tasks={todoTasks} 
        bgColor="bg-red-500/20"
      />
      <TaskRow 
        title="In Progress" 
        tasks={progressTasks} 
        bgColor="bg-yellow-500/20"
      />
      <TaskRow 
        title="Done" 
        tasks={doneTasks} 
        bgColor="bg-green-500/20"
      />
    </div>
  );
};

export default TaskList;
