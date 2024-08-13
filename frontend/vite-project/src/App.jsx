import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/singup'; // Corrected the import
import Home from './pages/home';
import { useAuthContext } from './context/authcontext';
import { useSocketContext } from './context/socketcontext';
import { Navigate } from 'react-router-dom';


export default function AppRouter() {
  const { authUser,  setAuthUser } = useAuthContext();

 
   // Use the hook inside a functional component

  // Debugging log

  const router = createBrowserRouter([
    {
      path: '/',
      element: authUser  ? <Navigate to="/home"/> : <Navigate to="/login" />
    },
    {
      path: '/home',
      element: authUser  ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: '/signup',
      element: authUser  ? <Navigate to="/home" /> : <Signup />,
    },
    {
      path: '/login',
      element: authUser  ? <Navigate to="/home" /> : <Login />
    },
  ]);

  return (
    <div className="root h-screen w-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

