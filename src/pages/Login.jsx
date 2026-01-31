import React from "react";
import "./Login.css"
function Login() {
  return (
    <div className="form-container">
      <h1 className="form-title">Welcome Back</h1>
      <form action="">
        {/* email feild */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
          />
        </div>
         {/* password feild */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Create a passwordr"
              name="password"
              id="password"
            />
          </div>
          {/* submit button */}
          <button type="submit" className="btn-primary">
            Login
          </button>
      </form>
  
    </div>
  );
}

export default Login;