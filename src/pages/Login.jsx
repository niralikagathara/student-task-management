import { useState } from 'react';
import './Login.css';
import { Link, Navigate , useNavigate } from 'react-router-dom';

function Login() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [Data, setData]=useState({
       email : "",
       password: "",
  });


  const handleInputChange =(e) =>
  {
     setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  
  const validate =() => {
    const newErrors = {};

    if (!Data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Data.email)) {
      newErrors.email = "Invalid Email format.";
    }

     if (!Data.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (Data.password.length < 6) {
      newErrors.password = "Password 6 character required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const saveData = JSON.parse(localStorage.getItem("authData"));
      if(
        saveData.email === Data.email &&
        saveData.password === Data.password
      )
      {
        localStorage.setItem("loginData",JSON.stringify(Data));
      alert("Login Successfully.......");
      navigate("/dashboard");
      }
      else{
        alert("Something went Wrong");
      }
    }
  };



  return (
   <div className="form-container" onSubmit={handleSubmit}>
    <h1 className="form-title">Welcome back</h1>
     
     {/* LogIn form*/}
    <form onSubmit={handleSubmit}>
        {/*Email feild */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
            type="email"
            id="email"
            name="email"
            value={Data.email}
            placeholder="Enter your email" 
            onChange={handleInputChange}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>
      
      {/* Password Feild */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
            type="password"
            id="password"
            name="password"
            value={Data.password}
            placeholder="Create a Password"
             onChange={handleInputChange}
              />
            {errors.password && (
              <span className="error-msg">{errors.password}</span>
            )}
          </div>

          {/* Submit Button*/}
          <button type="submit" className="btn-primary">
            Login
          </button>
    </form>

    {/* Link to Register Page*/}
    <p className="link-text">
        Don't have an account? <Link to="/register">Register here</Link>
    </p>
   </div>
  )
}

export default Login;
