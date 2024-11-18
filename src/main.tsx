import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import { TaskProvider } from './components/task-context.tsx'; // Gunakan TaskProvider, bukan TaskContext

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskProvider> {/* Bungkus aplikasi dengan TaskProvider */}
      <App />
    </TaskProvider>
  </StrictMode>
);
