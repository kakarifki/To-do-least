import { FC, useState } from 'react';
import TaskList from './components/list-tasks';
import { useTasks } from './context/task-context';
import Layout from '@/components/common/layout';
import Sidebar from '@/components/common/sidebar';
import { getRemainingDays } from '@/utils/date-utils';

type FilterType = 'all' | 'today' | 'yesterday' | 'tomorrow' | 'work' | 'home' | 'hobby';

const App: FC = () => {
  const { tasks, deleteTask, handleEditTaskStatus } = useTasks();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = tasks.filter(task => {
    // Search filter
    const searchMatch = searchQuery === '' || 
      task.nameTodo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.details.toLowerCase().includes(searchQuery.toLowerCase());

    if (!searchMatch) return false;

    // Date and category filters
    const remainingDays = getRemainingDays(task.dueDate);
    
    switch (activeFilter) {
      case 'today':
        return remainingDays === 'Due today';
      case 'yesterday':
        return remainingDays.includes('overdue');
      case 'tomorrow':
        return remainingDays === 'Due tomorrow';
      case 'work':
        return task.category.toLowerCase() === 'work';
      case 'home':
        return task.category.toLowerCase() === 'home';
      case 'hobby':
        return task.category.toLowerCase() === 'hobby';
      default:
        return true;
    }
  });



  return (
    <div className="App flex min-h-screen">
      <div className="w-1/4">
        <Sidebar
          onFilterChange={setActiveFilter}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          searchQuery={searchQuery}
          filteredTasksCount={filteredTasks.length}
        />
      </div>
      <div className="main w-3/4 bg-gray-50">
        <Layout>
          <TaskList 
            tasks={filteredTasks}
            deleteTask={deleteTask}
            handleEditTaskStatus={handleEditTaskStatus}
          />
        </Layout>
      </div>
    </div>
  );
}

export default App;
