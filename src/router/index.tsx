import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivateLayout from "../layout/private/Private";

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
          path: "/login",
          element: <LoginPage />,
        }   
      ]
    }
  ]);