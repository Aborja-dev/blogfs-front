import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivateLayout from "../layout/private/Private";
import CreatePage from "../pages/create/CreatePage";
import { AuthLoader } from "../pages/Home/loader";
import BlogsPage from "../pages/blogs/page";
import { BlogLoader } from "../pages/blogs/loader";
import ErrorPage from "../pages/not-found";
import { UserLoader } from "../pages/users/loader";
import UsersPage from "../pages/users/page";


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    loader: AuthLoader,
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'blogs',
        loader: BlogLoader,
        element: <BlogsPage />
      },
      {
        path: 'users',
        loader: UserLoader,
        element: <UsersPage />
      }
    ],
  },
  {
    path: '/create',
    element: <PrivateLayout><CreatePage /></PrivateLayout>
  },
  {
    path: "/login",
    element: <Main><LoginPage /></Main>,
  }
]);