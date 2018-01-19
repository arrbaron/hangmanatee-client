import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/user";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
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
        <TextField type="text" name="username" floatingLabelText="username" />
        <label>Password</label>
        <TextField type="password" name="password" floatingLabelText="password" />
        <FlatButton type="submit" label="Log in" />
      </form>
    )
  }
};

export default connect()(LoginForm);