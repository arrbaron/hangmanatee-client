import React, { Component } from 'react';

import Header from "./Header";
import Nav from "./Nav";
import LandingSection from "./LandingSection";
import RegisterForm from ".//RegisterForm";
import Footer from "./Footer";
import '../App.css';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <LandingSection
          heading={"Create"} subheading={"Create custom word sets"} image={"[image of word set creation]"}
          text={"Create, edit, and share personalized word sets, tailored to what YOU want to learn"}
        />
        <LandingSection
          heading={"Spell"} subheading={"Use them to play Hangman(atee)"} image={"[image of Hangmanatee game]"}
          text={"Play Hangmanatee using your custom word sets, practicing spelling!"}
        />
        <LandingSection
          heading={"Recall"} subheading={"...and quiz yourself!"} image={"[image of word set quizzing]"}
          text={"After finding the word, get quizzed on its meaning!"}
        />
        <RegisterForm />
        <Footer />
      </div>
    );
  }
}

export default Landing;
