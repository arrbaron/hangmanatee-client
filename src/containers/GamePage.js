import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styles/GamePage.css";

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const letters = alphabet.map((letter, index) => {
  return (
    <button key={index}>{letter}</button>
  );
});

const GamePage = props => {
  const answerChoices = [props.currentCard];
  const cards = props.cards;

  for (let i = 0; i < 2; i++) {
    let randomIndex = Math.floor(Math.random() * cards.length);

    if (cards[randomIndex].term === props.currentCard.term) {
      i--;
    } else {
      answerChoices.push(cards[randomIndex]);
      cards.splice(randomIndex, 1);
    }
  }
 
  const cardChoices = answerChoices.map((card, index) => {
    return (
      <Card key={index} term={card.term} def={card.definition} />
    );
  });

  return (
    <section>
      <Nav username="username"/>
      <Header />
      <main role="main">
        <div className="game">
          <h3>Category: {props.category.toUpperCase()}</h3>
          <p>Guesses left: {props.guessesLeft}</p>
          <p>Correct! The word was <strong>{props.currentCard.term}</strong>.</p>
          <div className="letter-row">
            {letters}
          </div>
          <p>What does <strong>{props.currentCard.term}</strong> mean?</p>
          {cardChoices}
        </div>
      </main>
      <Footer />
    </section>
  );
};

const mapStateToProps = state => ({
  category: state.game.category,
  currentCard: state.game.currentCard,
  guesses: state.game.guesses,
  guessesLeft: state.game.guessesLeft,
  cards: state.wordSets[0].cards
});

export default connect(mapStateToProps)(GamePage);