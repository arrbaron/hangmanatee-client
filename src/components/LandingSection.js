import React from "react";
import "../styles/LandingSection.css";

const LandingSection = props => (
  <section className="landing-section">
    <h3>{props.heading}</h3>
    <h4>{props.subHeading}</h4>
    <p>{props.image}</p>
    <p>{props.text}</p>
  </section>
);

export default LandingSection;