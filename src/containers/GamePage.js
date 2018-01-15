import { sampleSize, filter, shuffle } from "lodash";
import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { correctGuess, incorrectGuess, gameOver } from "../actions/game";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styles/GamePage.css";

const GamePage = props => {
  
  const guessLetter = letter => {
    if (!props.guesses.includes(letter)) {
      const letterGuess = letter.toLowerCase();
      const answer = props.currentCard.term.toLowerCase();
      const newDisplayedWord = props.displayedWord;

      if (answer.includes(letterGuess)) {
        let lettersToGo = 0;

        console.log("letter found in word");
        answer.split("").forEach((lett, index) => {
          if (lett === letterGuess) {
            newDisplayedWord[index] = lett;
          } else if (lett !== letterGuess && newDisplayedWord[index] === "_") {
            newDisplayedWord[index] = "_";
            lettersToGo++;
          }
        });
        props.dispatch(correctGuess(newDisplayedWord, letter));
        checkGameEnd(lettersToGo);
      } else {
        console.log("letter not found in word");
        props.dispatch(incorrectGuess(letter, props.guessesLeft - 1));
        checkGameEnd();
      }
    } 
    else {
      // return an error message
      console.log("old letter");
    }
  };

  const checkGameEnd = lettersToGo => {
    console.log(lettersToGo);
    if (lettersToGo < 1) {
      props.dispatch(gameOver("win"));
      // TODO: fix the below
    } else if (props.guessesLeft < 2) {
      props.dispatch(gameOver("lose"));
    }
  };

  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const letters = alphabet.map((letter, index) => {
    return <button key={letter} onClick={() => guessLetter(letter)}>{letter}</button>;
  });
  const wrongAnswers = 2;
  const answerChoices = sampleSize(filter(props.cards, function(o) { return o.term !== props.currentCard.term}), wrongAnswers);
  answerChoices.push(props.currentCard);
  const shuffledChoices = shuffle(answerChoices);

  const cardChoices = shuffledChoices.map((card, index) => {
    return <Card key={card._id} id={card._id} term={card.term} def={card.definition} />
  });

  if (props.status === "playing" || props.status === "idle") {
    return (
      <section>
        <Nav username="username" />
        <Header />
        <main role="main">
          <div className="game">
            <h3>Category: {props.currentWordSet.title.toUpperCase()}</h3>
            <p>Guesses left: {props.guessesLeft}</p>
            <div className="letter-row">
              {letters}
            </div>
            <p>{props.displayedWord.join(" ")}</p>
          </div>
        </main>
        <Footer />
      </section>
    );
  } else if (props.status === "win") {
    return (
      <section>
        <Nav username="username" />
        <Header />
        <main role="main">
          <div className="game">
            <h3>Category: {props.currentWordSet.title.toUpperCase()}</h3>
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
  } else if (props.status === "lose") {
    return (
      <section>
        <Nav username="username" />
        <Header />
        <main role="main">
          <div className="game">
            <h3>Category: {props.currentWordSet.title.toUpperCase()}</h3>
            <p>Sorry :( The word was <strong>{props.currentCard.term}</strong>.</p>
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
  }
};

const mapStateToProps = state => ({
  status: state.game.status,
  currentCard: state.game.currentCard,
  guesses: state.game.guesses,
  guessesLeft: state.game.guessesLeft,
  currentWordSet: state.wordSets.currentWordSet,
  cards: state.wordSets.currentWordSet.cards,
  displayedWord: state.game.displayedWord
});

export default connect(mapStateToProps)(GamePage);