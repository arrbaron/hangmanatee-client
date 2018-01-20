import React from "react";
import history from "../history";
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
    console.log(); 
    return (    
      <form className="register-form" onSubmit={event => this.handleSubmit(event)}>
        {history.location.pathname === "/" && 
          <h3>Get started</h3>
        }
        <TextField type="text" name="username" floatingLabelText="username" required />
        <TextField type="password" name="password" floatingLabelText="password" required/>
        <FlatButton type="submit" label="Sign up"/>
        <p>Already signed up? <Link to="/login">Login!</Link></p>
      </form>
    )
  };
};

export default connect()(RegisterForm);