import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  // state declaration section
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  //logic section
  const handleInputChange = (e) => {
    //console.log(e.target.value,e.target.value);
    //e.target.name = e.target.value
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!FormData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (FormData.name.length <= 3) {
      newErrors.name = "Minimum 3 character required.";
    }

    if (!FormData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(FormData.email)) {
      newErrors.email = "Invalid Email format.";
    }

    if (!FormData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(FormData.phone)) {
      newErrors.phone = "Phone must be in 10 digit.";
    }

    if (!FormData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (FormData.password.length < 6) {
      newErrors.password = "Password 6 character required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("authData", JSON.stringify(FormData));
      alert("Registration Successfully.......");
      navigate("/login");
    }
  };
  // useEffect(()=>{
  //   console.log(FormData)
  // },[FormData])

  //design section
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">Register</h1>
        <form onSubmit={handleSubmit}>
          {/* Name fEILD*/}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={FormData.name}
              placeholder="Enter Your full Name"
              onChange={handleInputChange}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          {/*Email feild */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={FormData.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          {/*Phon Number field */}
          <div className="form-group">
            <label htmlFor="phone">Phon Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={FormData.phone}
              placeholder="Enter Your Phon Number"
              onChange={handleInputChange}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          {/* Password Feild */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={FormData.password}
              placeholder="Create a Password"
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className="error-msg">{errors.password}</span>
            )}
          </div>

          {/* Submit Button*/}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>

        {/* Link to Register Page*/}
        <p className="link-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </>
  );
}

export default Register;
