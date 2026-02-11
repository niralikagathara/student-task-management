// import { useState } from 'react'
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AuthGuard from "./auth/AuthGuard";

const DefaultRoute = () => {
  const LoginData = JSON.parse(localStorage.getItem('Data'));
  if (LoginData) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Navigate to="/login" replace />;
};

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />,
    },
    {
      path: "/login",
      element: (<AuthGuard required={false}><Login /></AuthGuard>),
    },
    {
      path: "/register",
      element:  (<AuthGuard required={false}><Register /></AuthGuard>),
    },
    {
      path: "/dashboard",
      element: (<AuthGuard required={true}><Dashboard/></AuthGuard>),
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
