import ItemTask from '../item-task';

interface Task {
  id: string;
  nameTodo: string;
  details: string;
  dueDate: string;
  category: string;
}

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
}

const TaskList = ({ tasks, deleteTask }: TaskListProps) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">Task List</h2>
      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <ItemTask key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
