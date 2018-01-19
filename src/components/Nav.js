import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/user";
import { clearSets } from "../actions/wordSets";
import FlatButton from "material-ui/FlatButton";
import favicon from "../images/favicon.ico";
import "../styles/Nav.css";

const Nav = props => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.dispatch(logoutUser());
    props.dispatch(clearSets());
  };

  if (props.currentUser.username) {
    return (
      <nav>
        <ul>
          <span className="nav-logo">
            <img src={favicon} alt="hangmanateach logo"/>
            <Link className="nav-logo__title" to="/"><li>Hangmanateach</li></Link>
          </span>
          <li>Hello, {props.currentUser.username}!</li>
          {/* <Link to="/game/misc"><li>Play</li></Link> */}
          <Link to="/word-set/misc"><li><FlatButton label="Wordsets" /></li></Link>
          <Link to="/" onClick={() => handleLogout()}><li><FlatButton label="Logout" /></li></Link>
        </ul>
      </nav>
    )
  }

  else {
    return (
      <nav>
        <ul>
          <span className="nav-logo">
            <img src={favicon} alt="hangmanateach logo" />
            <Link className="nav-logo__title" to="/"><li>Hangmanateach</li></Link>
          </span>
          <Link to="/login"><li><FlatButton label="Login" /></li></Link>
          <Link to="/register"><li><FlatButton label="Register" /></li></Link>
        </ul>
      </nav>
    )
  }
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Nav);