import { createContext, useContext, useState, ReactNode } from 'react';

interface Task {
  id: string;
  nameTodo: string;
  priority: 'Urgent' | 'Normal' | 'Casual';
}

interface TaskContextProps {
  tasks: Task[];
  addTask: (name: string, priority: 'Urgent' | 'Normal' | 'Casual') => void;
  deleteTask: (id: string) => void;
}

const initialTasks: Task[] = [
  { id: '1', nameTodo: 'Task 1', priority: 'Normal' },
  { id: '2', nameTodo: 'Task 2', priority: 'Urgent' },
  { id: '3', nameTodo: 'Task 3', priority: 'Casual' },
  { id: '4', nameTodo: 'Task 4', priority: 'Normal' },
  { id: '5', nameTodo: 'Task 5', priority: 'Urgent' },
];

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (name: string, priority: 'Urgent' | 'Normal' | 'Casual') => {
    const newTask: Task = {
      id: (tasks.length + 1).toString(),
      nameTodo: name,
      priority,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
