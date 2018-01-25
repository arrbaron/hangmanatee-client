import React from "react";
import history from "../history";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser, loginUser } from "../actions/user";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import "../styles/RegisterForm.css";

class RegisterForm extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    this.props.dispatch(registerUser(username, password));
  }

  render() {
    return (    
      <form className="register-form" onSubmit={event => this.handleSubmit(event)}>
        {history.location.pathname === "/" && 
          <h3>Get started</h3>
        }
        <TextField type="text" name="username" floatingLabelText="username" required />
        <TextField type="password" name="password" floatingLabelText="password" required/>
        <FlatButton type="submit" label="Sign up"/>
        <Link to="/login" className="link link--login"><FlatButton label="Already signed up? Log in" /></Link>
        <Link to="#" className="link link--login" onClick={() => this.props.dispatch(loginUser("demouser123", "demouser123"))}>
          <FlatButton label="Try our demo account" />
        </Link>
      </form>
    )
  };
};

export default connect()(RegisterForm);