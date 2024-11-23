import ItemTask from '../item-task';

interface Task {
  id: string;
  nameTodo: string;
  details: string;
  dueDate: string;
  category: string;
  status: 'todo' | 'progress' | 'done';
}

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  handleEditTaskStatus: (id: string, status: 'todo' | 'progress' | 'done') => void;
  onTaskClick: (task: Task) => void;
}

const TaskList = ({ tasks, deleteTask, handleEditTaskStatus, onTaskClick }: TaskListProps) => {
  const todo = tasks.filter(task => task.status === 'todo');
  const progress = tasks.filter(task => task.status === 'progress');
  const done = tasks.filter(task => task.status === 'done');

  return (
    <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
      <div>
        <h2 className="text-lg font-semibold mb-2">To-Do</h2>
        <div className="grid grid-cols-1 gap-4">
          {todo.map(task => (
            <ItemTask key={task.id} task={task} deleteTask={deleteTask} handleEditTaskStatus={handleEditTaskStatus} onTaskClick={onTaskClick} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Progress</h2>
        <div className="grid grid-cols-1 gap-4">
          {progress.map(task => (
            <ItemTask key={task.id} task={task} deleteTask={deleteTask} handleEditTaskStatus={handleEditTaskStatus} onTaskClick={onTaskClick} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Done</h2>
        <div className="grid grid-cols-1 gap-4">
          {done.map(task => (
            <ItemTask key={task.id} task={task} deleteTask={deleteTask} handleEditTaskStatus={handleEditTaskStatus} onTaskClick={onTaskClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
