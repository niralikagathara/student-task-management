import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const navigate = useNavigate();

  const [tasks, settasks] = useState([]);
const [editTask,setEditTask]=useState()

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      settasks(data);
    } catch 
                (error) {
      console.log(error);
    }
  };
  const handleAdd = async (newTask) => {
    const tasktoAdd = { ...newTask, completed: false };
    console.log(newTask);
    {
      /*call structure*/
    }
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasktoAdd),
      });
      console.log(tasktoAdd);
      const data = await response.json();
      settasks([...tasks, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTask = async (updateTask) => {
        try {
          await fetch(`http://localhost:3000/tasls/${updateTask.id}`, {
            method: "PUT",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(updateTask),
          });
          settasks(
            tasks.map((task) =>
              task.id === updateTask.id ? { ...updateTask } : task,
            ),
          );
        } catch (error) {
          console.log(error);
        }
      };
  const editingTask = (editingTask) => {
    console.log(editingTask);
    setEditTask(editingTask);
  };
  const handleDeleteTask=async(id)=>{
    try{
      await fetch(`http://localhost:3000/tasks/${id}`,{
        method:"DELETE"
      })
      settasks(tasks.filter((task)=>task.id !==id))
    }catch(error){
      console.log(error)
    }
  }
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    localStorage.removeItem("authData");
    navigate("/login");
  };
  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout} />
      <TaskForm
        addTask={handleAdd}
        updateTask={handleUpdateTask}
        editingTask={editTask}
      />
      <h1> My Task </h1>

      <TaskList tasks={tasks} editingTask={editingTask} deletingTask={handleDeleteTask} />
    </div>
  );
}; 

export default Dashboard;
