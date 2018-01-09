import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/user";
import "../styles/LoginForm.css";

class LoginForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    this.props.dispatch(loginUser(username, password));
  }

  render() {
    return (
      <form className="login-form" onSubmit={event => this.handleSubmit(event)}>
        <h3>Log in</h3>
        <label>Username</label>
        <input type="text" name="username" placeholder="username" />
        <label>Password</label>
        <input type="password" name="password" placeholder="password" />
        <button>Log in</button>
      </form>
    )
  }
};

export default connect()(LoginForm);