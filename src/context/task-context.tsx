import { createContext, useContext, useState, useEffect } from 'react';
import { Task, initialTasks } from '@/data/initialTasks';

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addTask: (nameTodo: string, details: string, dueDate: string, category: string) => void;
  deleteTask: (id: string) => void;
  handleEditTaskStatus: (id: string, newStatus: Task['status']) => void;
  editTask: (id: string, nameTodo: string, details: string, dueDate: string, category: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  // Get initial data from localStorage or fall back to initialTasks
  const getInitialTasks = () => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
    return initialTasks;
  };

  const [tasks, setTasks] = useState<Task[]>(getInitialTasks());

  // Save to localStorage whenever tasks change
  useEffect(() => {
    console.log('Saving tasks to localStorage:', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (nameTodo: string, details: string, dueDate: string, category: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      nameTodo,
      details,
      dueDate,
      category,
      status: 'todo' as Task['status'],
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleEditTaskStatus = (id: string, newStatus: Task['status']) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const editTask = (id: string, nameTodo: string, details: string, dueDate: string, category: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, nameTodo, details, dueDate, category }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask, deleteTask, handleEditTaskStatus, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
