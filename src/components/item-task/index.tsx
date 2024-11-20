interface Task {
  id: string;
  nameTodo: string;
  details: string;
  dueDate: string;
  category: string;
}

interface ItemTaskProps {
  task: Task;
  deleteTask: (id: string) => void;
}

const ItemTask = ({ task, deleteTask }: ItemTaskProps) => {
  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col gap-1">
      <h3 className="text-xl font-semibold">{task.nameTodo}</h3>
      <p className="text-sm text-gray-600">{task.details}</p>
      <p className="text-xs text-gray-500">{task.dueDate}</p>
      <p className="text-xs text-gray-500">{task.category}</p>
      <button
        className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ItemTask;
