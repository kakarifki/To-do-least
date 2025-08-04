export interface Task {
  id: string;
  nameTodo: string;
  details: string;
  dueDate: string;
  category: string;
  status: 'todo' | 'progress' | 'done'; // add status
}

// Function to generate dynamic dates based on current date
const generateDynamicDates = () => {
  const today = new Date();
  
  // Tomorrow
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  
  // Next week
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  
  return {
    today: today.toISOString().split('T')[0],
    tomorrow: tomorrow.toISOString().split('T')[0],
    nextWeek: nextWeek.toISOString().split('T')[0]
  };
};

// Initial tasks with dynamic dates
export const initialTasks = (): Task[] => {
  const dates = generateDynamicDates();
  
  return [
    { 
      id: '1', 
      nameTodo: 'Set Up Meeting', 
      details: 'Set up a meeting with the team to discuss project requirements', 
      dueDate: dates.today, 
      category: 'Work', 
      status: 'todo' 
    },
    { 
      id: '2', 
      nameTodo: 'Review Shoes', 
      details: 'Review the shoes design and make sure it meets the requirements', 
      dueDate: dates.tomorrow, 
      category: 'Work', 
      status: 'todo' 
    },
    { 
      id: '3', 
      nameTodo: 'Plan weekly tasks', 
      details: 'Create a schedule for the upcoming week and prioritize tasks', 
      dueDate: dates.nextWeek, 
      category: 'Home', 
      status: 'todo' 
    }
  ];
};