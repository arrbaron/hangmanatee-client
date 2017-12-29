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
        <button>New list</button>
        <button>New card</button>
        <button>Misc</button>
        <button>Verbs</button>
        <button>Adjectives</button>
        <Card term={"gato"} def={"cat"} />
        <Card term={"dragoon"} def={"dragon"} />
        <Card term={"cacahuete"} def={"peanut"} />
      </div>
    </main>
    <Footer />
  </section>
);

export default WordSetPage;