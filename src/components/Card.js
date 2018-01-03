import React from "react";
import { connect } from "react-redux";
import "../styles/Card.css";

const Card = props => {
  if (props.playing) {
    return (
      <div className="card">
        <p>{props.def}</p>
      </div>
    )
  } else {
    return (
      <div className="card">
        <p>{props.term}</p>
        <button>Edit</button>
        <button>Flip</button>
        <button>Delete</button>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  playing: state.playing
});

export default connect(mapStateToProps)(Card);