import React from "react";
import "../styles/LoginForm.css";

const LoginForm = () => (
  <form className="login-form">
    <h3>Log in</h3>
    <label>Email</label>
    <input type="text" placeholder="email" />
    <label>Password</label>
    <input type="password" placeholder="password" />
    <button>Log in</button>
  </form>
);

export default LoginForm;