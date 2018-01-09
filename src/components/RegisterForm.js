import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../actions/user";
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
        <label>First name</label>
        <input type="text" name="firstName" placeholder="first name" />
        <label>Last name</label>
        <input type="text" name="lastName" placeholder="last name" />
        <label>Username</label>
        <input type="text" name="username" placeholder="username" />
        <label>Password</label>
        <input type="password" name="password" placeholder="password" />
        <button>Sign up</button>
        <p>Already signed up? <Link to="/login">Login!</Link></p>
      </form>
    )
  };
};

export default connect()(RegisterForm);