import React from "react";
import progress0 from "../images/progress0.png";
import progress1 from "../images/progress1.png";
import progress2 from "../images/progress2.png";
import progress3 from "../images/progress3.png";
import progress4 from "../images/progress4.png";
import progress5 from "../images/progress5.png";
import progress6 from "../images/progress6.png";
import progress7 from "../images/progress7.png";
import progress8 from "../images/progress8.png";
import progress9 from "../images/progress9.png";

const Progress = props => {
  const images = [progress0, progress1, progress2, progress3, progress4, progress5, progress6, progress7, progress8, progress9];
  return <img src={images[props.index]} alt="game progress"/> 
};

export default Progress;