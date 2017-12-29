import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav>
    <ul>
      <Link to="/login"><li>Login</li></Link>
      <Link to="/register"><li>Register</li></Link>
    </ul>
  </nav>
);

export default Nav;