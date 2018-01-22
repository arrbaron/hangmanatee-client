import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sample } from "lodash";
import { showTitleEdit, editTitle, createCard } from "../actions/wordSets";
import { startGame } from "../actions/game";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import WordSetDrawer from "../components/WordSetDrawer";
import AddBox from 'material-ui/svg-icons/content/add-box';
import IconButton from 'material-ui/IconButton';
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import "../styles/WordSetPage.css";

class WordSetPage extends React.Component {
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
              {this.props.currentWordSet.cards.length > 0 && 
                <Link to={"/game/play"}><RaisedButton label="Play with a random word"
                 className="word-set__button word-set__button--play" onClick={() => {
                  const randomCard = sample(this.props.currentWordSet.cards);
                  const displayedWord = randomCard.term.trim().split("").map(letter => "_");
                  this.props.dispatch(startGame(randomCard._id, displayedWord, this.props.currentWordSet));
                }}/>
                </Link>
              }
              <div className="cards">
                {cards}
              </div>
              <IconButton className="word-set__button word-set__button--add" onClick={() => this.props.dispatch(createCard(this.props.currentWordSet._id))}>
                <AddBox />
              </IconButton>
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