import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/Header.css";

const Header = () => (
  <header role="banner">
    <Link to="/"><h1>Hangmanateach</h1></Link>
    <img src={logo} alt="hangmanateacher logo" />
    <Link to="/word-set/misc"><h2>Flashcards + Hangman = SUCCESS!</h2></Link>
  </header>
);

export default Header;