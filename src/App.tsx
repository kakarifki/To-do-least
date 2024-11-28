import { FC } from 'react';
import TaskList from './components/list-tasks';
import { useTasks } from './context/task-context';
import Layout from '@/components/common/layout';

const App: FC = () => {
  const { tasks, deleteTask, handleEditTaskStatus } = useTasks();

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
        <Layout>
          <TaskList 
            tasks={tasks}
            deleteTask={deleteTask}
            handleEditTaskStatus={handleEditTaskStatus}
          />
        </Layout>
      </div>
    </div>
  );
}

export default App;
