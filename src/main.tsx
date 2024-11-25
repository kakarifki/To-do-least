import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/about';
import Faq from './pages/faq';
import ErrorPage from "./pages/error-page";
import TaskDetail from './pages/task-detail';
import NewTask from './pages/new-task';
import { TaskProvider } from './context/task-context';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/task/:id",
    element: <TaskDetail />,
  },
  {
    path: "/new-task",
    element: <NewTask />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskProvider>
        <RouterProvider router={router} />
    </TaskProvider>
  </React.StrictMode>
);
