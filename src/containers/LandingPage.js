import React from 'react';
import { connect } from "react-redux";

import Header from "../components/Header";
import Nav from "../components/Nav";
import LandingSection from "../components/LandingSection";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";
import '../styles/App.css';

const LandingPage = props => {
  const landingSections = props.landingSections.map((section, index) => (
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
      <Nav />
      <Header />
      {landingSections}
      <RegisterForm />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  landingSections: state.landingSections
});

export default connect(mapStateToProps)(LandingPage);
