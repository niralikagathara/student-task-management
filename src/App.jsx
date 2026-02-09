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

const DefaultRoute = () => {
  const authData = JSON.parse(localStorage.getItem("authData"));
  if (authData) {
    return <Navigate to="/login" replace />;
  }
  else if (authData)
    {return <Navigate to="/register" replace />;}

  return <Navigate to="/dashboard" replace />;
};

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element:<Dashboard/>
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
