import { FC } from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4 bg-zinc-50">
      <h1 className="text-2xl font-bold">To-Do-Least</h1>
      <nav>
        <Button variant="outline" onClick={() => navigate('/new-task')}>
          Add New Task
        </Button>
        <Button variant="outline" onClick={() => navigate('/about')}>
          About
        </Button>
        <Button variant="outline" onClick={() => navigate('/faq')}>
          FAQ
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
