import React, { Component } from 'react';

import Header from "../components/Header";
import Nav from "../components/Nav";
import LandingSection from "../components/LandingSection";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";
import './App.css';

class LandingPage extends Component {
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

export default LandingPage;
