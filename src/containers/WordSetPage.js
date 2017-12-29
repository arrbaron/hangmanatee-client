import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "./WordSetPage.css";

const WordSetPage = props => (
  <section>
    <Nav />
    <Header />
    <main role="main">
      <div className="word-set">
        <h3>{props.match.params.id.toUpperCase()}</h3>
        <button>Misc</button>
        <button>Verbs</button>
        <button>Adjectives</button>
        <button>New list</button>
        <button>New card</button>
        <Card term={"cat"} def={"gato"} />
        <Card term={"dragon"} def={"dragoon"} />
        <Card term={"peanut"} def={"cacahuete"} />
        <Link to={"/game/"+props.match.params.id}><button>Play Hangmanatee with this word set</button></Link>
      </div>
    </main>
    <Footer />
  </section>
);

export default WordSetPage;