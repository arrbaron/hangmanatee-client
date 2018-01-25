import React from 'react';
import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";
import '../styles/App.css';
import TopNav from '../components/TopNav';
import landingAnswer from "../images/landingAnswer.PNG";
import landingGuessing from "../images/landingGuessing.PNG";
import landingWordsetCreation from "../images/landingWordsetCreation.PNG";

const LandingPage = props => {
  const landingSectionsRaw = [
    {
      heading: "Create",
      subheading: "Create custom word sets",
      image: landingWordsetCreation,
      alt: "word set creation",
      text: "Create, edit, and share your word sets, tailored to what YOU (or your students) want to learn"
    },
    {
      heading: "Spell",
      subheading: "Spell them in a fun and familiar format",
      image: landingGuessing,
      alt: "letter guessing",
      text: "Play Hangmanateach using your custom word sets, practicing spelling!"
    },
    {
      heading: "Recall",
      subheading: "...and quiz yourself!",
      image: landingAnswer,
      alt: "vocabulary quizzing",
      text: "After finding the word, get quizzed on its meaning!"
    }
  ];

  const landingSections = landingSectionsRaw.map((section, index) => (
    <LandingSection
     key={index} 
     heading={section.heading}
     subheading={section.subheading}
     image={section.image}
     alt={section.alt}
     text={section.text}
     />
  ));
  
  return (
    <div className="App">
      <TopNav />
      <Header />
      {landingSections}
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default LandingPage;
