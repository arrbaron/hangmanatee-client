import React, { Component } from "react";
import { Link } from "react-router-dom";
import FlatButton from 'material-ui/FlatButton';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <div>
        <Link to="/login"><FlatButton {...this.props} label="Login" /></Link>
        <Link to="/register"><FlatButton {...this.props} label="Register" /></Link>
      </div>
    );
  }
}

export default Login;