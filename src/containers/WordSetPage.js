import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createWordSet, changeWordSet, deleteWordSet, showTitleEdit, editTitle, createCard } from "../actions/wordSets";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styles/WordSetPage.css";

class WordSetPage extends React.Component {
  handleEditTitleSubmit(event) {
    event.preventDefault();
    const newTitle = event.target.newTitle.value;
    this.props.dispatch(editTitle(newTitle, this.props.currentWordSet._id));
  }
    
  render() {
    if (this.props.wordSets) {
      
    }
    const wordSets = this.props.wordSets.map((wordSet, index) => (
      <button key={wordSet._id} onClick={
        () => this.props.dispatch(changeWordSet(wordSet._id))}>
        {wordSet.title}
      </button>
    ));

    if (this.props.currentWordSet.cards) {
      const cards = this.props.currentWordSet.cards.map((card, index) => (
        <Card key={index} id={card._id} term={card.term} def={card.definition} />
      ));

      return (
        <section>
          <Nav />
          <Header />
          <main role="main">
            <div className="word-set">
              <h3>{this.props.currentWordSet.title}</h3>
              <button onClick={() => this.props.dispatch(showTitleEdit(!this.props.showTitleEdit))}>Edit title</button>
              {this.props.showTitleEdit &&
                <form onSubmit={event => this.handleEditTitleSubmit(event)}>
                  <input type="text" name="newTitle" placeholder={this.props.currentWordSet.title} required/>
                  <button>Submit</button>
                </form>
              }
              {wordSets}
              <button onClick={() => this.props.dispatch(createWordSet(this.props.currentUser.username))}>New list</button>
              <button onClick={() => this.props.dispatch(createCard(this.props.currentWordSet._id))}>New card</button>
              {cards}
              <Link to={"/game/" + this.props.match.params.id}><button>Play with this word set</button></Link>
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
            <Nav />
            <Header />
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
  showTitleEdit: state.wordSets.showTitleEdit
});

export default connect(mapStateToProps)(WordSetPage);