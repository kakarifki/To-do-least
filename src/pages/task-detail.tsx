import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '@/context/task-context';
import { Button } from '@/components/ui/button';
import Layout from '@/components/common/layout';
import { getRemainingDays } from '@/utils/date-utils';

const TaskDetail: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { tasks, deleteTask, handleEditTaskStatus, editTask } = useTasks();
  const selectedTask = tasks.find(task => task.id === id);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    nameTodo: selectedTask?.nameTodo || '',
    details: selectedTask?.details || '',
    dueDate: selectedTask?.dueDate || '',
    category: selectedTask?.category || ''
  });

  // Get today's date in YYYY-MM-DD format for the min attribute
  const today = new Date().toISOString().split('T')[0];

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

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedDate = new Date(editForm.dueDate);
    const todayDate = new Date(today);
    
    // Validate that the selected date is not in the past
    if (selectedDate < todayDate) {
      alert('Cannot select past dates');
      return;
    }

    if (selectedTask) {
      editTask(
        selectedTask.id,
        editForm.nameTodo,
        editForm.details,
        editForm.dueDate,
        editForm.category
      );
      setIsEditing(false);
    }
  };

  const statusColors = {
    todo: 'bg-red-500',
    progress: 'bg-yellow-500',
    done: 'bg-green-500'
  } as const;

  const statusLabels = {
    todo: 'To Do',
    progress: 'In Progress',
    done: 'Done'
  } as const;

  if (!selectedTask) {
    return <div>Task not found</div>;
  }

  const renderStatusButton = () => {
    if (selectedTask.status === 'todo') {
      return (
        <Button
          variant="outline"
          className="border-2 border-yellow-500 bg-yellow-50 hover:bg-yellow-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-200 font-medium"
          onClick={handleProgress}
        >
          Move to Progress
        </Button>
      );
    }
    if (selectedTask.status === 'progress') {
      return (
        <Button
          variant="outline"
          className="border-2 border-green-500 bg-green-50 hover:bg-green-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-200 font-medium"
          onClick={handleDone}
        >
          Mark as Done
        </Button>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-3xl">
      <div className="mb-4 sm:mb-6">
        <Button
          variant="outline"
          className="border-2 border-gray-500 bg-gray-50 hover:bg-gray-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-200 font-medium flex items-center gap-2 text-sm sm:text-base"
          onClick={() => navigate('/')}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </Button>
      </div>

      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <span 
            className={`${statusColors[selectedTask.status]} text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium shadow-sm
            ring-2 ring-offset-2 ${statusColors[selectedTask.status].replace('bg-', 'ring-')}/30 self-start`}
          >
            {statusLabels[selectedTask.status]}
          </span>
          <Button
            variant="outline"
            className="border-2 border-blue-500 bg-blue-50 hover:bg-blue-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-200 font-medium text-sm sm:text-base self-end sm:self-auto"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel Edit' : 'Edit Task'}
          </Button>
        </div>

        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Task Name</label>
              <input
                type="text"
                value={editForm.nameTodo}
                onChange={(e) => setEditForm({ ...editForm, nameTodo: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
              <textarea
                value={editForm.details}
                onChange={(e) => setEditForm({ ...editForm, details: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                rows={4}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
              <input
                type="date"
                min={today}
                value={editForm.dueDate}
                onChange={(e) => setEditForm({ ...editForm, dueDate: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input
                type="text"
                value={editForm.category}
                onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white shadow-sm hover:shadow-md transition-all duration-200 font-medium text-sm sm:text-base w-full sm:w-auto"
              >
                Save Changes
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-2 border-gray-300 hover:bg-gray-100 shadow-sm hover:shadow-md transition-all duration-200 font-medium text-sm sm:text-base w-full sm:w-auto"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              {selectedTask.nameTodo}
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {selectedTask.details}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 sm:gap-2 bg-gray-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {getRemainingDays(selectedTask.dueDate)}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 sm:gap-2 bg-gray-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {selectedTask.category}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {renderStatusButton()}
              <Button
                variant="destructive"
                className="bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border-2 border-red-500 shadow-sm hover:shadow-md transition-all duration-200 font-medium text-sm sm:text-base w-full sm:w-auto"
                onClick={handleDelete}
              >
                Delete Task
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default () => <Layout><TaskDetail /></Layout>;