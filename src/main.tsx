import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { TaskProvider } from './components/task-context.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
    </StrictMode>
)
