import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import LandingSection from "../components/LandingSection";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";
import '../styles/App.css';
import TopNav from '../components/TopNav';

const LandingPage = props => {
  const landingSectionsRaw = [
    {
      heading: "Create",
      subHeading: "Create custom word sets",
      image: "[image of word set creation]",
      text: "Create, edit, and share personalized word sets, tailored to what YOU (or your students) want to learn"
    },
    {
      heading: "Spell",
      subHeading: "Use them to play Hangman(atee)",
      image: "[image of Hangmanatee game]",
      text: "Play Hangmanatee using your custom word sets, practicing spelling!"
    },
    {
      heading: "Recall",
      subHeading: "...and quiz yourself!",
      image: "[image of word set quizzing]",
      text: "After finding the word, get quizzed on its meaning!"
    }
  ];

  const landingSections = landingSectionsRaw.map((section, index) => (
    <LandingSection
     key={index} 
     heading={section.heading}
     subheading={section.subheading}
     image={section.image}
     text={section.text}
     />
  ));
  
  return (
    <div className="App">
      <TopNav />
      {/* <Nav /> */}
      <Header />
      {landingSections}
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default LandingPage;
