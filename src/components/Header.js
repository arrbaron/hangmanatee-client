import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header role="banner">
    <Link to="/"><h1>Hangmanatee</h1></Link>
    <Link to="/word-set/misc"><h2>Flashcards + hangman = SUCCESS!</h2></Link>
  </header>
);

export default Header;