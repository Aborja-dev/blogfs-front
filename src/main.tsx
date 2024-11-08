import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router';
import { ContextSesionProvider } from './context/Sesion/Provider';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextSesionProvider>
    <RouterProvider router={router} />
    </ContextSesionProvider>
  </StrictMode>,
)
