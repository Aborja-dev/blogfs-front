import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router';
import { ContextSesionProvider } from './context/Sesion/Provider';
import GlobalProvider from './context/global/Provider';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
    <ContextSesionProvider>
    <RouterProvider router={router} />
    </ContextSesionProvider>
    </GlobalProvider>
  </StrictMode>,
)
