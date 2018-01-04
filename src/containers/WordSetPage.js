import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styles/WordSetPage.css";

const WordSetPage = props => {
  const wordSets = props.wordSets.map((wordSet, index) => (
    <button key={index}>{wordSet.title}</button>
  ));

  const cards = props.currentWordSet.cards.map((card, index) => (
    <Card key={index} term={card.term} def={card.definition} />
  ));
  
  return (
    <section>
      <Nav />
      <Header />
      <main role="main">
        <div className="word-set">
          <h3>{props.currentWordSet.title}</h3>
          {wordSets}
          <button>New list</button>
          <button>New card</button>
          {cards}
          <Link to={"/game/"+props.match.params.id}><button>Play with this word set</button></Link>
        </div>
      </main>
      <Footer />
    </section>
  );
};

const mapStateToProps = state => ({
  wordSets: state.wordSets,
  currentWordSet: state.currentWordSet
});

export default connect(mapStateToProps)(WordSetPage);