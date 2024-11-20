import { Button } from '@/components/ui/button';

const TopBar = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col bg-blue-50 p-4 rounded shadow-md">
      <h1 className="mx-auto text-2xl font-bold text-blue-700">To-Do-Least</h1>
      <div className="flex justify-end mt-4">
        <Button variant="outline" className="bg-blue-600 text-white">
          Add New Task
        </Button>
      </div>
    </div>
  );
};

export default TopBar;