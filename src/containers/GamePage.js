import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "./GamePage.css";

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const letters = alphabet.map((letter, index) => {
  return (
    <button key={index}>{letter}</button>
  );
});

const GamePage = props => (
  <section>
    <Nav username="username"/>
    <Header />
    <main role="main">
      <div className="game">
        <h3>Category: {props.match.params.id.toUpperCase()}</h3>
        <p>Guesses left: {props.guesses}</p>
        <p>Correct! The word was <strong>peanut</strong>.</p>
        <div className="letter-row">
          {letters}
        </div>
        <p>What does <strong>peanut</strong> mean?</p>
        <Card term={"gato"} def={"cat"} />
        <Card term={"dragoon"} def={"dragon"} />
        <Card term={"cacahuete"} def={"peanut"} />
      </div>
    </main>
    <Footer />
  </section>
);

export default GamePage;