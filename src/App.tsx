import TaskList from './components/list-tasks';
import TopBar from './components/top-bar';
import NewTask from './components/new-task';
import { TaskProvider } from './components/task-context';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <TopBar />
        <NewTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
