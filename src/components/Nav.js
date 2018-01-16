import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/user";
import "../styles/Nav.css";

const Nav = props => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.dispatch(logoutUser());
    // TODO - redirect
  };

  if (props.currentUser.username) {
    return (
      <nav>
        <ul>
          <li>Hello, {props.currentUser.username}!</li>
          {/* <Link to="/game/misc"><li>Play</li></Link> */}
          <Link to="/word-set/misc"><li>Wordsets</li></Link>
          <button onClick={() => handleLogout()}>Logout</button>
        </ul>
      </nav>
    )
  }

  else {
    return (
      <nav>
        <ul>
          <Link to="/login"><li>Login</li></Link>
          <Link to="/register"><li>Register</li></Link>
        </ul>
      </nav>
    )
  }
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Nav);