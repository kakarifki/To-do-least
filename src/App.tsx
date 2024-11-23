import { useState } from 'react';
import TaskList from './components/list-tasks';
import TopBar from './components/top-bar';
import { initialTasks } from './data/initialTasks';
import { Task } from './data/initialTasks';
import { useNavigate } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : initialTasks;
  });
  const navigate = useNavigate();

  const addTask = (nameTodo: string, details: string, dueDate: string, category: string) => {
    const newTask = {
      id: Date.now().toString(),
      nameTodo,
      details,
      dueDate,
      category,
      status: 'todo' as 'todo' | 'progress' | 'done',
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleEditTaskStatus = (id: string, status: 'todo' | 'progress' | 'done') => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleTaskClick = (task: Task) => {
    navigate(`/task-detail/${task.id}`);
  };

  return (
    <div className="App">
      <TopBar addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} handleEditTaskStatus={handleEditTaskStatus} onTaskClick={handleTaskClick} />
    </div>
  );
}

export default App;
