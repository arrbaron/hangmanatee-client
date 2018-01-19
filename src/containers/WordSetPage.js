import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sample } from "lodash";
import { createWordSet, changeWordSet, deleteWordSet, showTitleEdit, editTitle, createCard, getLastWordSet } from "../actions/wordSets";
import { startGame } from "../actions/game";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import WordSetDrawer from "../components/WordSetDrawer";
import MoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import IconButton from 'material-ui/IconButton';
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import "../styles/WordSetPage.css";

class WordSetPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getLastWordSet(this.props.username));
  }
  
  handleEditTitleSubmit(event) {
    event.preventDefault();
    const newTitle = event.target.newTitle.value;
    this.props.dispatch(editTitle(newTitle, this.props.currentWordSet._id));
  }
    
  render() {
    const title = () => {
      if (this.props.showTitleEdit) {
        return (
          <form className="word-set__form" onSubmit={event => this.handleEditTitleSubmit(event)}>
            <TextField type="text" name="newTitle" autoFocus onFocus={e => {
              let val = e.target.value;
              e.target.value = "";
              e.target.value = val;
            }}
            defaultValue={this.props.currentWordSet.title} />
            <FlatButton className="word-set__form__button" type="submit" label="OK" />
          </form>
        );
      } else {
        return <h3 onClick={() => this.props.dispatch(showTitleEdit(!this.props.showTitleEdit))}>{this.props.currentWordSet.title}</h3>;
      }
    }

    if (this.props.currentWordSet.cards) {
      const cards = this.props.currentWordSet.cards.map((card, index) => (
        <Card key={index} id={card._id} term={card.term} def={card.definition} />
      ));

      return (
        <section>
          <TopNav />
          <main role="main">
            <div className="word-set">
              <WordSetDrawer wordSets={this.props.wordSets} username={this.props.username}/>
              {title()}
              {/* <button onClick={() => this.props.dispatch(createCard(this.props.currentWordSet._id))}>New card</button> */}
              {cards}
              <Link to={"/game/" + this.props.match.params.id}><button onClick={() => {
                const randomCard = sample(this.props.currentWordSet.cards);
                const displayedWord = randomCard.term.trim().split("").map(letter => "_");
                this.props.dispatch(startGame(randomCard._id, displayedWord, this.props.currentWordSet));
              }
              }>Play with this word set</button></Link>
              <button onClick={
                () => this.props.dispatch(deleteWordSet(this.props.currentWordSet._id, this.props.currentUser.username))}>
                Delete list
              </button>
            </div>
          </main>
          <Footer />
        </section>
      )
    } else {
        return (
          <section>
            <TopNav />
            <main role="main">
              <div className="word-set">
                <IconButton className="word-set__icon--more">
                  <MoreHoriz />
                </IconButton>
                <h3>New wordset</h3>
                <button onClick={event => this.handleClick(event)}>New list</button>
                <button>New card</button>
              </div>
            </main>
            <Footer />
          </section>
      );
    }
  }
};

const mapStateToProps = state => ({
  wordSets: state.wordSets.sets,
  currentWordSet: state.wordSets.currentWordSet,
  currentUser: state.user.currentUser,
  showTitleEdit: state.wordSets.showTitleEdit,
  username: state.user.currentUser.username
});

export default connect(mapStateToProps)(WordSetPage);