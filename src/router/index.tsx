import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import LoginPage from "../pages/LoginPage";
import PrivateLayout from "../layout/private/Private";
import CreatePage from "../pages/create/CreatePage";
import { AuthLoader } from "../pages/Home/loader";
import BlogsPage from "../pages/blogs/page";
import { BlogLoader } from "../pages/blogs/loader";
import ErrorPage from "../pages/not-found";
import { UserLoader } from "../pages/users/loader";
import UsersPage from "../pages/users/page";
import HomePage from "../pages/Home/page";
import CreateUserPage from "../pages/users/create/page";
import { UserEditLoader } from "../pages/users/edit/loader";
import EditPage from "../pages/users/edit/page";
import { detailLoader } from "../pages/blogs/detail/loader";
import DetailPage from "../pages/blogs/detail/page";


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

    children: [
      {
        path: 'blogs',
        children: [
          {
            index: true,
            loader: BlogLoader,
            element: <BlogsPage />
          },
          {
            path: 'create',
            element: <CreatePage />
          },
          {
            path: ':id',
            loader: detailLoader,
            element: <DetailPage />
          }
        ]
      },
      {
        path: 'users',
        loader: UserLoader,
        element: <UsersPage />
      },
      {
        path: 'users/create',
        element: <CreateUserPage />
      },
      {
        path: 'users/edit/:id',
        loader: UserEditLoader,
        element: <EditPage />
      }
    ],
  },
  {
    path: "/login",
    element: <Main><LoginPage /></Main>,
  }
]);