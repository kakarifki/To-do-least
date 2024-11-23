import { Task } from '../data/initialTasks';

export const fetchTaskById = (id: string): Task | null => {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];
  return tasks.find(task => task.id === id) || null;
};

export const updateTask = (updatedTask: Task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];
  const updatedTasks = tasks.map(task =>
    task.id === updatedTask.id ? updatedTask : task
  );
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};
