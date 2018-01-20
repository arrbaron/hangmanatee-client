import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showCardEdit, flipCard, editCard, deleteCard } from "../actions/wordSets";
import { startGame, chooseAnswer } from "../actions/game";
import Paper from 'material-ui/Paper';
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import IconButton from 'material-ui/IconButton';
import Flip from 'material-ui/svg-icons/image/flip';
import Delete from 'material-ui/svg-icons/action/delete';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
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
      <Paper style={{ backgroundColor: "#00BCD4" }} className="card" onClick={() => submitAnswer()} zDepth={3}>
        <p>{props.def}</p>
      </Paper>
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
    
    const text = () => {
      if (showEdit) {
        return (
          <div>
            <h5>{showTerm ? "Term" : "Definition"}</h5>
            <form className="card__form" onSubmit={(e) => {
              e.preventDefault();
              props.dispatch(editCard(showTerm, e.target.newText.value, props.currentWordSet._id, props.id));
            }
            }>
              <TextField type="text" name="newText" autoFocus onFocus={e => {
                let val = e.target.value;
                e.target.value = "";
                e.target.value = val;
              }}
              defaultValue={showTerm ? props.term : props.def} />
              <FlatButton type="submit" label="OK" />
            </form>
          </div>
        );
      } else {
        return (
          <div>
            <h5>{showTerm ? "Term" : "Definition"}</h5>
            <p onClick={() => props.dispatch(showCardEdit(!showEdit, props.id))}>
              {showTerm ? props.term : props.def}
            </p>
          </div>
        );
      }
    };

    return (
      <Paper style={{ backgroundColor: "#00BCD4" }} className="card" zDepth={3}>
        {text()}
        <Link to="/game/misc" ><PlayArrow className="card__icon card__icon--play" onClick={() => {
          const displayedWord = props.term.trim().split("").map(letter => "_");
          props.dispatch(startGame(props.id, displayedWord, props.currentWordSet))}} />
        </Link>
        <IconButton className="card__icon card__icon--flip" tooltip="flip" onClick={() => {
          props.dispatch(showCardEdit(false, props.id))
          props.dispatch(flipCard(!showTerm, props.id))
        }
        }> 
          <Flip />
        </IconButton>
        <IconButton className="card__icon card__icon--delete" tooltip="delete" onClick={() => props.dispatch(deleteCard(props.currentWordSet._id, props.id))} >
          <Delete />
        </IconButton>
      </Paper>
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