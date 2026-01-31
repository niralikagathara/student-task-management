import './App.css'
import Register from './pages/Register'
import Login from './pages/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
const route = createBrowserRouter([
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/register",
    element : <Register/>
  }
]) 

    return <RouterProvider router={route}/>
}
export default App
