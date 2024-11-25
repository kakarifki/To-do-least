import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '@/context/task-context';
import { Button } from '@/components/ui/button';
import Layout from '@/components/common/layout';

const TaskDetail: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { tasks, deleteTask, handleEditTaskStatus } = useTasks();
  const selectedTask = tasks.find(task => task.id === id);

  const handleDelete = () => {
    if (selectedTask) {
      deleteTask(selectedTask.id);
      navigate('/');
    }
  };

  const handleProgress = () => {
    if (selectedTask) {
      handleEditTaskStatus(selectedTask.id, 'progress');
      navigate('/');
    }
  };

  const handleDone = () => {
    if (selectedTask) {
      handleEditTaskStatus(selectedTask.id, 'done');
      navigate('/');
    }
  };

  if (!selectedTask) {
    return <div>Task not found</div>;
  }

  return (
    <Layout>
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">Task Detail</h2>
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h3 className="text-xl font-semibold mb-2">
          {selectedTask.nameTodo}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {selectedTask.details}
        </p>
        <p className="text-xs text-gray-500 mb-2">
          Due Date: {selectedTask.dueDate}
        </p>
        <p className="text-xs text-gray-500">
          Category: {selectedTask.category}
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
          onClick={handleProgress}
        >
          Progress
        </Button>
        <Button
          variant="outline"
          className="bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
          onClick={handleDone}
        >
          Done
        </Button>
        <Button
          variant="outline"
          className="bg-red-500 text-zinc-50 shadow hover:bg-red-500/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
    </Layout>
  );
};

export default TaskDetail;
