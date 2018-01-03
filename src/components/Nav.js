import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <Link to="/login"><li>Login</li></Link>
      <Link to="/register"><li>Register</li></Link>
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Nav);