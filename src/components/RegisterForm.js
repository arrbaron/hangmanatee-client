import React from "react";
import "./RegisterForm.css";

const RegisterForm = () => (
  <form className="register-form">
    <h3>Get started</h3>
    <label>First name</label>
    <input type="text" placeholder="first name" />
    <label>Last name</label>
    <input type="text" placeholder="last name" />
    <label>Email</label>
    <input type="text" placeholder="email" />
    <label>Password</label>
    <input type="password" placeholder="password" />
    <button>Sign up</button>
  </form>
);

export default RegisterForm;