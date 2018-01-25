import React from "react";
import logo from "../images/logo.png";
import "../styles/Header.css";

const Header = () => (
  <header role="banner">
    <h1>Hangmanateach</h1>
    <img src={logo} alt="hangmanateacher logo" />
    <h2>Play & Memorize!</h2>
    <h3>
      A vocabulary studying app that combines the power of flashcards with the fun of hangman!
    </h3>
  </header>
);

export default Header;