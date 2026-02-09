import React from 'react';
import '../index.css';


function Navbar({title , onLogout}) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{title}</h1>
      </div>

      <div className="navbar-action">
        <button className="btn-secondry" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
