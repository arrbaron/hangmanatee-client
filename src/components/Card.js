import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <p>{props.term}</p>
    <button>Edit</button>
    <button>Flip</button>
    <button>Delete</button>
  </div>
);

export default Card;