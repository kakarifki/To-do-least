import { FC, useState, useEffect } from 'react';


type FilterType = 'all' | 'today' | 'yesterday' | 'tomorrow' | 'work' | 'home' | 'hobby';

interface SidebarProps {
  onFilterChange: (filter: FilterType) => void;
  onSearchChange: (query: string) => void;
  activeFilter: FilterType;
  searchQuery: string;
  filteredTasksCount: number;
}

// Name input component with localStorage functionality
const NameInput: FC = () => {
  const [name, setName] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Load name from localStorage on component mount
  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  // Save name to localStorage when it changes
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem('userName', newName);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center">
      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          onBlur={() => setIsEditing(false)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="text-2xl font-bold text-gray-800 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full"
          placeholder="Enter your name"
        />
      ) : (
        <h2 
          className="text-2xl font-bold text-gray-800 cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          {name ? `Hi, ${name}!` : (
            <span className="italic text-gray-400">Enter your name</span>
          )}
        </h2>
      )}
    </div>
  );
};

const Sidebar: FC<SidebarProps> = ({
  onFilterChange,
  onSearchChange,
  activeFilter,
  searchQuery,
  filteredTasksCount
}) => {
  const getFilterButtonClass = (filter: FilterType) => {
    return `py-2 px-4 rounded-lg transition-all duration-200 ${
      activeFilter === filter
        ? 'bg-blue-500 text-white shadow-md'
        : 'hover:bg-blue-50 text-gray-600 hover:text-blue-600'
    }`;
  };

  return (
    <div className="sidebar w-full bg-white border-r border-gray-100 p-6 space-y-6">
      <div className="space-y-1">
        <NameInput />
        <p className="text-gray-600">To-Do-Least</p>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
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
            onClick={() => onFilterChange('all')}
            className={getFilterButtonClass('all')}
          >
            All Tasks
          </button>
          <button
            onClick={() => onFilterChange('today')}
            className={getFilterButtonClass('today')}
          >
            Due Today
          </button>
          <button
            onClick={() => onFilterChange('yesterday')}
            className={getFilterButtonClass('yesterday')}
          >
            Overdue
          </button>
          <button
            onClick={() => onFilterChange('tomorrow')}
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
            onClick={() => onFilterChange('work')}
            className={getFilterButtonClass('work')}
          >
            Work
          </button>
          <button
            onClick={() => onFilterChange('home')}
            className={getFilterButtonClass('home')}
          >
            Home
          </button>
          <button
            onClick={() => onFilterChange('hobby')}
            className={getFilterButtonClass('hobby')}
          >
            Hobby
          </button>
        </div>
      </div>

      {searchQuery && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Found {filteredTasksCount} {filteredTasksCount === 1 ? 'task' : 'tasks'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;