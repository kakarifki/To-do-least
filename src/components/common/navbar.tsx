import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import About from '@/pages/about';

const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4 bg-zinc-50">
      <h1 className="text-2xl font-bold">To-Do-Least</h1>
      <About />
      <Button variant="outline" onClick={() => navigate('/new-task')}>
        Add New Task
      </Button>
    </div>
  );
};

export default Navbar;
