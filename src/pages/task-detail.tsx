import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Task } from '../data/initialTasks';
import { fetchTaskById } from "@/utils/fetch-data"; // Buat fungsi ini pada utils/fetch-data.ts
import { Button } from '@/components/ui/button';

interface TaskDetailProps {
  deleteTask: (id: string) => void;
  handleEditTaskStatus: (id: string, status: 'todo' | 'progress' | 'done') => void;
}

const TaskDetail = ({ deleteTask, handleEditTaskStatus }: TaskDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchedTask = fetchTaskById(id);
      setTask(fetchedTask);
    }
  }, [id]);

  const handleEditTask = (newStatus: 'todo' | 'progress' | 'done') => {
    if (task) {
      handleEditTaskStatus(task.id, newStatus);
      navigate('/');
    }
  };

  return (
    task ? (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">{task.nameTodo}</h2>
        <p className="text-lg mb-2">{task.details}</p>
        <div className="flex mb-2">
          <span className="font-semibold">Due Date:</span> <span>{task.dueDate}</span>
        </div>
        <div className="flex mb-2">
          <span className="font-semibold">Category:</span> <span>{task.category}</span>
        </div>
        <div className="flex mb-2">
          <span className="font-semibold">Status:</span> <span>{task.status}</span>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="bg-blue-600 text-white" onClick={() => handleEditTask('progress')}>
            Progress
          </Button>
          <Button variant="outline" className="bg-green-600 text-white" onClick={() => handleEditTask('done')}>
            Done
          </Button>
          <Button variant="outline" className="bg-red-600 text-white" onClick={() => deleteTask(task.id)}>
            Delete
          </Button>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default TaskDetail;
