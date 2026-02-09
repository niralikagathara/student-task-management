import React, { useEffect, useState } from "react";

 const TaskForm = ({addTask ,updateTask,editingTask}) => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    date: "",
    priority: "Medium",
  });

  const [error, setError] = useState({});
  useEffect(()=>{
    setFormData(editingTask)
  },[editingTask])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newError = {};
    if (!formData.title.trim()) {
      newError.title = "Task title is required";
    } else if (formData.title.length < 6) {
      newError.title = "minimum 6 character required";
    }
    if (!formData.desc.trim()) {
      newError.desc = "Description is required";
    }
    if (!formData.date.trim()) {
      newError.date = "Due date is required.";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (validate()) {
      if(editingTask){
      updateTask(formData)
    }
    else{
      addTask(formData)
    }
    }
  };
  
  return (
    <>
      <div className="add-task-card">
        <h2 style={{ marginBottom: "15px" }}>Add New Task</h2>
        <form onSubmit={handleAdd}>
          <div>
            <input
              type="text"
              placeholder="Task Title"
              name="title"
              id="title"
              value={formData?.title}
              onChange={handleChange}
            ></input>
            {error.title && <span className="error-msg">{error.title}</span>}
          </div>

          <div>
            <textarea
              placeholder="Description"
              rows="3"
              name="desc"
              id="desc"
              value={formData?.desc}
              onChange={handleChange}
            ></textarea>
            {error.desc && <span className="error-msg">{error.desc}</span>}
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <input
                type="date"
                name="date"
                id="date"
                value={formData?.date}
                onChange={handleChange}
              />
              {error.date && <span className="error-msg">{error.date}</span>}
            </div>

            <div style={{ flex: 1 }}>
              <select
                name="priority"
                id="priority"
                value={formData?.priority}
                onChange={handleChange}
              >
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
              </select>
            </div>
          </div>

          <div
            className="form-action"
            style={{ display: "flex", gap: "10px", marginTop: "10px" }}
          >
            <button
              type="submit"
              className="btn-primary"
              style={{ flex: 1 }}
              onClick={handleAdd} 
              >
              {editingTask?'update':'add'}
               Task        </button>

            <button
              type="button"
              className="btn-secondary"
              style={{ flex: 1 }}
              onClick={() =>
                setFormData({
                  title: "",
                  desc: "",
                  date: "",
                  priority: "Medium",
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