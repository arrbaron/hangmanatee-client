import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import WordSetPage from "./WordSetPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import GamePage from "./GamePage";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/word-set/:id" component={WordSetPage} />
          <Route exact path="/game/:id" component={GamePage} />
        </div>
      </Router>
    );
  }
}

export default App;
