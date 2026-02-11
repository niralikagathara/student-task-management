import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TaskForm = ({addTask,updateTask,editingTask}) => {
  const navigate = useNavigate();
  const [TaskData, settaskData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "Low",
  });

  const [errors, setErrors] = useState({});

  useEffect(()=>{
    settaskData(editingTask)
  },[editingTask])

  const handleInputChange = (e) => {
    settaskData({
      ...TaskData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!TaskData.title.trim()) {
      newErrors.title = "title is required.";
    }else if (TaskData.title.length <= 6) {
      newErrors.title = "Minimum 6 character required.";
    }
     if (!TaskData.date.trim()) {
      newErrors.date = "Date is required.";
    }

    if (!TaskData.description.trim()) {
      newErrors.description = "Description is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleAdd = (e) => {
    console.log(e)
    e.preventDefault();
    if (validate()) {
      if(editingTask)
      {
        updateTask(TaskData)
      }
      else{
         addTask(TaskData);
      alert("Add Task Successfully.......");
      }
    }
  };



  return (
    <>
      <div className="add-task-card">
        <h2 style={{ marginBottom: "15px" }}>Add New Task</h2>
        <form>
          <div>
            <input
              type="text"
              placeholder="Task Title"
              name="title"
              id="title"
                value={TaskData?.title}
              onChange={handleInputChange}
            />
            {errors.title && <span className="error-msg">{errors.title}</span>}

            {/* error message placeholder */}
          </div>

          <div>
            <textarea
              placeholder="Description"
              rows="3"
              name="description"
              id="description"
                value={TaskData?.description}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <input
                type="date"
                name="date"
                id="date"
                value={TaskData?.date}
                onChange={handleInputChange}
              />
              {errors.date && (
                <span className="error-msg">{errors.date}</span>
              )}
              {/* error message placeholder */}
            </div>

            <div style={{ flex: 1 }}>
              <select
                onChange={handleInputChange}
                id="priority"
                name="priority"
                value={TaskData?.priority}
              >
                <option value="Low">Low Priority</option>
                <option value="Meduim">Meduim Priority</option>
                <option value="High">High Priority</option>
              </select>
            </div>
          </div>

          <div
            className="form-actions"
            style={{ display: "flex", gap: "10px", marginTop: "10px" }}
          >
            <button
              className="btn-primary"
              type="submit"
              style={{ flex: 1 }}
              onClick={handleAdd}
            >
              {editingTask ? 'Update' : 'Add'}
               Task
            </button>

            <button
              className="btn-secondary"
              type="button"
              style={{ flex: 1 }}
              onClick={() =>
                settaskData({
                  title: "",
                  description: "",
                  date: "",
                  priority: "Low",
                })
              }
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
