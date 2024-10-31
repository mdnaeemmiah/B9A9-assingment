import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Profile from './Components/Profile.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRouter from './router/PrivateRouter.jsx';
import Order from './Components/Order.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Details from './Components/Details.jsx';
import Detail from './Components/Detail.jsx';
import ErrorPage from './Components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details',
        element: <Details></Details>,
        loader:()=>fetch('data.json')
      },
      {
        path: '/detail',
        element: <Detail></Detail>
      },
      {
        path: '/order',
        element: <PrivateRouter><Order></Order></PrivateRouter>
      },
      {
        path: '/dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>
      },
      {
        path: '/profile',
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
