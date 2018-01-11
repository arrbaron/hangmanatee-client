import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { protectedEndPointTesting } from "../actions";
import "../styles/Nav.css";

const Nav = props => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    // TODO - redirect
  };

  const handleTestProtectedEndPoint = () => {
    props.dispatch(protectedEndPointTesting());
    console.log(props.currentUser.username);
  };
  
  if (props.currentUser.username) {
    return (
      <nav>
        <ul>
          <li>Hello, {props.currentUser.username}!</li>
          <Link to="/game/misc"><li>Play</li></Link>
          <Link to="/word-set/misc"><li>Wordsets</li></Link>
          <button onClick={() => handleLogout()}>Logout</button>
          <button onClick={() => handleTestProtectedEndPoint()}>Test protected endpoint</button>
        </ul>
      </nav>
    )
  }

  else {
    return (
      <nav>
        <ul>
          <Link to="/login"><li>Login</li></Link>
          <button onClick={() => handleTestProtectedEndPoint()}>Test protected endpoint</button>
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