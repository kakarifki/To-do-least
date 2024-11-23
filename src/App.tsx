// src/App.tsx
import { FC } from 'react';
import TaskList from './components/list-tasks';
import TopBar from './components/top-bar';
import { Task } from '@/data/initialTasks';
import { useTasks } from '@/context/task-context';

const App: FC = () => {
  const { tasks, addTask, deleteTask, handleEditTaskStatus } = useTasks();

  const filteredTasks = (status: Task['status']) => tasks.filter(task => task.status === status);

  return (
    <div className="App flex">
      <div className="sidebar w-1/4 bg-zinc-50 p-4">
        <h2 className="text-lg font-semibold mb-2">Name</h2>
        <p>To-Do-Least</p>
        <h2 className="text-lg font-semibold mt-4 mb-2">Due Today</h2>
        <h2 className="text-lg font-semibold mt-4 mb-2">Due Yesterday</h2>
        <h2 className="text-lg font-semibold mt-4 mb-2">Due Tomorrow</h2>
        <h2 className="text-lg font-semibold mt-4 mb-2">Category</h2>
        <ul className="list-disc pl-4">
          <li>Work</li>
          <li>Home</li>
          <li>Hobby</li>
        </ul>
      </div>
      <div className="main w-3/4">
        <TopBar addTask={addTask} />
        <TaskList 
          tasks={filteredTasks('todo')} 
          deleteTask={deleteTask} 
          handleEditTaskStatus={handleEditTaskStatus}
        />
        <TaskList 
          tasks={filteredTasks('progress')} 
          deleteTask={deleteTask} 
          handleEditTaskStatus={handleEditTaskStatus}
        />
        <TaskList 
          tasks={filteredTasks('done')} 
          deleteTask={deleteTask} 
          handleEditTaskStatus={handleEditTaskStatus}
        />
      </div>
    </div>
  );
}

export default App;
