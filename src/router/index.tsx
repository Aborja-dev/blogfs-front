import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivateLayout from "../layout/private/Private";
import CreatePage from "../pages/create/CreatePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/home",
          element: <PrivateLayout><HomePage /></PrivateLayout>,
        },
        {
          path: '/create',
          element: <PrivateLayout><CreatePage /></PrivateLayout>
        },
        {
          path: "/login",
          element: <LoginPage />,
        }   
      ]
    }
  ]);