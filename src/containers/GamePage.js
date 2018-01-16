import { sampleSize, filter, shuffle } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { correctGuess, incorrectGuess, gameOver, resetGame } from "../actions/game";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styles/GamePage.css";

class GamePage extends Component {
  componentWillUnmount() {
    console.log("I'm unmounting!");
    this.props.dispatch(resetGame());
    // reset the game
      // set status to idle
      // current card to empty
      // 
  }

  render() {
    const guessLetter = letter => {
      if (!this.props.guesses.includes(letter)) {
        const letterGuess = letter.toLowerCase();
        const answer = this.props.currentCard.term.toLowerCase();
        const newDisplayedWord = this.props.displayedWord;

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
          this.props.dispatch(correctGuess(newDisplayedWord, letter));
          checkGameEnd(lettersToGo);
        } else {
          console.log("letter not found in word");
          this.props.dispatch(incorrectGuess(letter, this.props.guessesLeft - 1));
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
        this.props.dispatch(gameOver("win"));
        // TODO: fix the below
      } else if (this.props.guessesLeft < 2) {
        this.props.dispatch(gameOver("lose"));
      }
    };

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const letters = alphabet.map((letter, index) => {
      return <button key={letter} onClick={() => guessLetter(letter)}>{letter}</button>;
    });
    const wrongAnswers = 2;
    const answerChoices = sampleSize(filter(this.props.cards, o => { return o.term !== this.props.currentCard.term }), wrongAnswers);
    answerChoices.push(this.props.currentCard);
    const shuffledChoices = shuffle(answerChoices);

    const cardChoices = shuffledChoices.map((card, index) => {
      return <Card key={card._id} id={card._id} term={card.term} def={card.definition} />
    });

    if (this.props.status === "playing" || this.props.status === "idle") {
      return (
        <section>
          <Nav username="username" />
          <Header />
          <main role="main">
            <div className="game">
              <h3>Category: {this.props.currentWordSet.title.toUpperCase()}</h3>
              <h4>{this.props.message}</h4>
              <p>Guesses left: {this.props.guessesLeft}</p>
              <div className="letter-row">
                {letters}
              </div>
              <p>{this.props.displayedWord.join(" ")}</p>
            </div>
          </main>
          <Footer />
        </section>
      );
    } else if (this.props.status === "win") {
      return (
        <section>
          <Nav username="username" />
          <Header />
          <main role="main">
            <div className="game">
              <h3>Category: {this.props.currentWordSet.title.toUpperCase()}</h3>
              <p>Correct! The word was <strong>{this.props.currentCard.term}</strong>.</p>
              <div className="letter-row">
                {letters}
              </div>
              {!this.props.answerChosen &&
                <p>What does <strong>{this.props.currentCard.term}</strong> mean?</p>
              }
              <h4>{this.props.message}</h4>
              {cardChoices}
            </div>
          </main>
          <Footer />
        </section>
      );
    } else if (this.props.status === "lose") {
      return (
        <section>
          <Nav username="username" />
          <Header />
          <main role="main">
            <div className="game">
              <h3>Category: {this.props.currentWordSet.title.toUpperCase()}</h3>
              <p>Sorry :( The word was <strong>{this.props.currentCard.term}</strong>.</p>
              <div className="letter-row">
                {letters}
              </div>
              {!this.props.answerChosen &&
                <p>What does <strong>{this.props.currentCard.term}</strong> mean?</p>
              }
              <h4>{this.props.message}</h4>
              {cardChoices}
            </div>
          </main>
          <Footer />
        </section>
      );
    }
  }
};

const mapStateToProps = state => ({
  status: state.game.status,
  currentCard: state.game.currentCard,
  guesses: state.game.guesses,
  guessesLeft: state.game.guessesLeft,
  currentWordSet: state.wordSets.currentWordSet,
  cards: state.wordSets.currentWordSet.cards,
  displayedWord: state.game.displayedWord,
  message: state.game.message,
  answerChosen: state.game.answerChosen
});

export default connect(mapStateToProps)(GamePage);