export interface Task {
  id: string;
  nameTodo: string;
  details: string;
  dueDate: string;
  category: string;
  status: 'todo' | 'progress' | 'done'; // add status
}

export const initialTasks: Task[] = [
  { id: '1', nameTodo: 'Task 1', details: 'Detail 1', dueDate: '2023-06-01', category: 'Work', status: 'todo' },
  { id: '2', nameTodo: 'Task 2', details: 'Detail 2', dueDate: '2023-06-02', category: 'Home', status: 'todo' },
  // Tambahkan task lainnya di sini
];