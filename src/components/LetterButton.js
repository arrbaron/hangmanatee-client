import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const LetterButton = props => {
  return (
    <RaisedButton className="game__letter" label={props.letter} key={props.letter} onClick={() => {
      console.log(props);
    }} />
  )
};

export default LetterButton;