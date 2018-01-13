import React from "react";
import { connect } from "react-redux";
import { showCardEdit, flipCard, editCard } from "../actions/wordSets";
import "../styles/Card.css";

const Card = props => {
  const showEdit = props.cards.find(card => (
    card._id === props.id
  )).showEdit;
  
  const showTerm = props.cards.find(card => (
    card._id === props.id
  )).showTerm;

  if (props.playing) {
    return (
      <div className="card">
        <p>{props.def}</p>
      </div>
    )
  } else {
    return (
      <div className="card">
        <p>{showTerm ? `Term: ${props.term}` : `Definition: ${props.def}`}</p>
        <button>Play</button>
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
        <button>Delete</button>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  playing: state.game.playing,
  cards: state.wordSets.currentWordSet.cards,
  currentWordSet: state.wordSets.currentWordSet
});

export default connect(mapStateToProps)(Card);