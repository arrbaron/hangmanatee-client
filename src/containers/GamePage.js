import { sampleSize, filter, shuffle, sample } from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { correctGuess, incorrectGuess, gameOver, resetGame, startGame } from "../actions/game";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import RaisedButton from "material-ui/RaisedButton";
import "../styles/GamePage.css";
import Progress from "../components/Progress";

class GamePage extends Component {  
  componentWillUnmount() {
    this.props.dispatch(resetGame());
  }

  render() { 
    const guessLetter = letter => {
      if (!this.props.guesses.includes(letter)) {
        const letterGuess = letter.toLowerCase();
        const answer = this.props.currentCard.term.toLowerCase();
        const newDisplayedWord = this.props.displayedWord;

        if (answer.includes(letterGuess)) {
          let lettersToGo = 0;

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
          this.props.dispatch(incorrectGuess(letter, this.props.guessesLeft - 1));
          checkGameEnd();
        }
      }
      else {
        // return an error message
      }
    };

    const checkGameEnd = lettersToGo => {
      if (lettersToGo < 1) {
        this.props.dispatch(gameOver("win"));
        // TODO: fix the below
      } else if (this.props.guessesLeft < 2) {
        this.props.dispatch(gameOver("lose"));
      }
    };

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const letters = alphabet.map((letter, index) => {
      let isDisabled = false;
      if (this.props.guesses.includes(letter)) {
        isDisabled = true;
      }
      return <RaisedButton className="game__letter" disabled={isDisabled} label={letter} key={letter} onClick={() => {
        guessLetter(letter);
      }}/>
    });
    const wrongAnswers = 3;
    const answerChoices = sampleSize(filter(this.props.cards, o => { return o.term !== this.props.currentCard.term }), wrongAnswers);
    answerChoices.push(this.props.currentCard);
    const shuffledChoices = shuffle(answerChoices);

    const cardChoices = shuffledChoices.map((card, index) => {
      return <Card key={card._id} id={card._id} term={card.term} def={card.definition} />
    });

    if (this.props.status === "playing" || this.props.status === "idle") {
      return (
        <section>
          <TopNav />
          <main role="main">
            <div className="game">
              <Progress index={7 - this.props.guessesLeft}/>
              <h3>Category: {this.props.currentWordSet.title.toUpperCase()}</h3>
              <h4>{this.props.message}</h4>
              <div className="game__letters">
                {letters}
              </div>
              <p className="game__word">{this.props.displayedWord.join(" ")}</p>
            </div>
          </main>
          <Footer />
        </section>
      );
    } else if (this.props.status === "win") {
      return (
        <section>
          <TopNav />
          <main role="main">
            <div className="game">
              {!this.props.answerChosen &&
              <div>
                <Progress index={8} />
                <p>Correct! The word was <strong>{this.props.currentCard.term}</strong>.</p>
                <p>What does <strong>{this.props.currentCard.term}</strong> mean?</p>
              </div>
              }
              <h4>{this.props.message}</h4>
              {this.props.answerChosen &&
                <div className="game__feedback">
                  <Progress index={9} />  
                  <RaisedButton className="game__feedback__button" label="Play again" onClick={() => {
                    const randomCard = sample(this.props.currentWordSet.cards);
                    const displayedWord = randomCard.term.trim().split("").map(letter => "_");
                    this.props.dispatch(startGame(randomCard._id, displayedWord, this.props.currentWordSet));
              }}/>
                  <Link to="/word-set/misc" className="game__feedback__button"><RaisedButton label="Back to My Wordsets"/></Link>
                </div>
              }
              {cardChoices}
            </div>
          </main>
          <Footer />
        </section>
      );
    } else if (this.props.status === "lose") {
      return (
        <section>
          <TopNav />
          <main role="main">
            <div className="game">
              {!this.props.answerChosen &&
              <div>
                <Progress index={7} />
                <p>Sorry :( The word was <strong>{this.props.currentCard.term}</strong>.</p>
                <p>What does <strong>{this.props.currentCard.term}</strong> mean?</p>
              </div>
              }
              <h4>{this.props.message}</h4>
              {this.props.answerChosen &&
                <div className="game__feedback">
                <Progress index={9} />
                  <RaisedButton className="game__feedback__button" label="Play again" onClick={() => {
                    const randomCard = sample(this.props.currentWordSet.cards);
                    const displayedWord = randomCard.term.trim().split("").map(letter => "_");
                    this.props.dispatch(startGame(randomCard._id, displayedWord, this.props.currentWordSet));
                  }} />
                  <Link to="/word-set/misc" className="game__feedback__button"><RaisedButton label="Back to My Wordsets" /></Link>
                </div>
              }
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