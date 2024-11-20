import { useState } from 'react';
import TaskList from './components/list-tasks';
import TopBar from './components/top-bar';
import NewTask from './components/new-task';
import { initialTasks } from './data/initialTasks';

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (nameTodo: string, details: string, dueDate: string, category: string) => {
    const newTask = {
      id: Date.now().toString(),
      nameTodo,
      details,
      dueDate,
      category,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <TopBar />
      <NewTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
