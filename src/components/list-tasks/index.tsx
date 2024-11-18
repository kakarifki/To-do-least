import ItemTask from "../item-task";
import { useTaskContext } from "../../components/task-context";

const ListTask = () => {
  const { tasks, deleteTask } = useTaskContext(); // Ambil tasks dan deleteTask dari context

  return (
    <div className='container mx-auto mt-4'>
      <h2 className='flex justify-center text-xl font-semibold text-gray-700'>Task List</h2>
      <ul className='flex flex-col gap-4 mt-4'>
        {tasks.map(task => (
          <ItemTask
            key={task.id}
            id={task.id}
            taskName={task.nameTodo}
            priority={task.priority}
            deleteTask={deleteTask} // Pass deleteTask ke ItemTask
          />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
