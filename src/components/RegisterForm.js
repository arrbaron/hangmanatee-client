import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../actions/user";
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
        <h3>Get started</h3>
        <label>Username</label>
        <TextField type="text" name="username" floatingLabelText="username" />
        <label>Password</label>
        <TextField type="password" name="password" floatingLabelText="password" />
        <FlatButton type="submit" label="Sign up"/>
        <p>Already signed up? <Link to="/login">Login!</Link></p>
      </form>
    )
  };
};

export default connect()(RegisterForm);