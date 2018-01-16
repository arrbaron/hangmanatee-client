import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showCardEdit, flipCard, editCard, deleteCard } from "../actions/wordSets";
import { startGame, chooseAnswer } from "../actions/game"
import "../styles/Card.css";

const Card = props => {
  const submitAnswer = () => {
    let message = "";

    if (props.def === props.currentCard.definition) {
      message = `Correct! ${props.currentCard.term} means ${props.currentCard.definition}!`;
    } else {
      message = `Sorry. ${props.currentCard.term} actually means ${props.currentCard.definition}.`;
    }
    props.dispatch(chooseAnswer(message));
  };
  
  if (props.answerChosen) {
    console.log("nothing to display!");
    return null;
  } 

  if (props.status === "win" || props.status === "lose") {
    return (
      <div className="card card--answer" onClick={() => submitAnswer()}>
        <p>{props.def}</p>
      </div>
    )
  } else if (props.status === "playing") {
    return null;
  } else if (props.status === "idle") {
    const showEdit = props.cards.find(card => (
      card._id === props.id
    )).showEdit;

    const showTerm = props.cards.find(card => (
      card._id === props.id
    )).showTerm;
    
    return (
      <div className="card">
        <p>{showTerm ? `Term: ${props.term}` : `Definition: ${props.def}`}</p>
        <Link to="/game/misc"><button onClick={() => {
          const displayedWord = props.term.trim().split("").map(letter => "_");
          props.dispatch(startGame(props.id, displayedWord, props.currentWordSet))}}>
          Play</button></Link>
        <button onClick={() => props.dispatch(showCardEdit(!showEdit, props.id))}>Edit</button>
        { showEdit && 
          <form onSubmit={(e) => {
            e.preventDefault();
            props.dispatch(editCard(showTerm, e.target.newText.value, props.currentWordSet._id, props.id));
            }
          }>
            <input type="text" name="newText" />
            <p>Beep</p>
            <button>Submit</button>
          </form>
        }
        <button onClick={() => props.dispatch(flipCard(!showTerm, props.id))}>Flip</button>
        <button onClick={() => props.dispatch(deleteCard(props.currentWordSet._id, props.id))}>Delete</button>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  status: state.game.status,
  currentCard: state.game.currentCard,
  cards: state.wordSets.currentWordSet.cards,
  currentWordSet: state.wordSets.currentWordSet,
  answerChosen: state.game.answerChosen
});

export default connect(mapStateToProps)(Card);