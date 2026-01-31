import "./Register.css";
import React from "react";
function Register() {
 
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">REGISTER</h1>
        <form action="">
          {/* name Feild */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full Name"
              name="name"
              id="name"
            />
          </div>
          {/* email feild */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
            />
          </div>
          {/* Phone feild */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone Number"
              name="phone"
              id="phone"
            />
          </div>
          {/* password feild */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              name="password"
              id="password"
            />
          </div>
          {/* submit button */}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;