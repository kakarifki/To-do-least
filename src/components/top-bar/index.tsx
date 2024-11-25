import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TopBar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4 bg-zinc-50">
      <h1 className="text-2xl font-bold">To-Do-Least</h1>
      <Button variant="outline" onClick={() => navigate('/new-task')}>
        Add New Task
      </Button>
    </div>
  );
};

export default TopBar;
