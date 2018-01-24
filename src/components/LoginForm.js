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
    if (this.props.error) {
      return (
        <form className="login-form" onSubmit={event => this.handleSubmit(event)}>
          <TextField type="text" errorText="Incorrect username/password" name="username" floatingLabelText="username" required />
          <TextField type="password" errorText="Incorrect username/password" name="password" floatingLabelText="password" required />
          <FlatButton type="submit" label="Log in" />
        </form>
      )
    } else {
      return (
        <form className="login-form" onSubmit={event => this.handleSubmit(event)}>
          <TextField type="text" name="username" floatingLabelText="username" required />
          <TextField type="password" name="password" floatingLabelText="password" required />
          <FlatButton type="submit" label="Log in" />
          <Link to="#" className="link link--login" onClick={() => this.props.dispatch(loginUser("demouser123", "demouser123"))}>
            <FlatButton label="Try our demo account" />
          </Link>
        </form>
      )
    }
  }
};

const mapStateToProps = state => ({
  error: state.user.error
});

export default connect(mapStateToProps)(LoginForm);