import { FC, useState } from 'react';
import TaskList from './components/list-tasks';
import { useTasks } from './context/task-context';
import Layout from '@/components/common/layout';
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

  const getFilterButtonClass = (filter: FilterType) => {
    return `py-2 px-4 rounded-lg transition-all duration-200 ${
      activeFilter === filter
        ? 'bg-blue-500 text-white shadow-md'
        : 'hover:bg-blue-50 text-gray-600 hover:text-blue-600'
    }`;
  };

  return (
    <div className="App flex min-h-screen">
      <div className="sidebar w-1/4 bg-white border-r border-gray-100 p-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-gray-800">Hi!</h2>
          <p className="text-gray-600">To-Do-Least</p>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
            <svg 
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Due Date</h2>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={getFilterButtonClass('all')}
            >
              All Tasks
            </button>
            <button
              onClick={() => setActiveFilter('today')}
              className={getFilterButtonClass('today')}
            >
              Due Today
            </button>
            <button
              onClick={() => setActiveFilter('yesterday')}
              className={getFilterButtonClass('yesterday')}
            >
              Overdue
            </button>
            <button
              onClick={() => setActiveFilter('tomorrow')}
              className={getFilterButtonClass('tomorrow')}
            >
              Due Tomorrow
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Category</h2>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => setActiveFilter('work')}
              className={getFilterButtonClass('work')}
            >
              Work
            </button>
            <button
              onClick={() => setActiveFilter('home')}
              className={getFilterButtonClass('home')}
            >
              Home
            </button>
            <button
              onClick={() => setActiveFilter('hobby')}
              className={getFilterButtonClass('hobby')}
            >
              Hobby
            </button>
          </div>
        </div>

        {searchQuery && (
          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Found {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'}
            </p>
          </div>
        )}
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
