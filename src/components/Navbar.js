import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">Ticketly<span>.com</span></div>
      <div className="signin">
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
