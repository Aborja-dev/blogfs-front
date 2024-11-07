import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Main><HomePage /></Main>,
  },
  {
    path: "/login",
    element: <Main><LoginPage /></Main>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
