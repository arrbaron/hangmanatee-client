import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./LandingPage";
import WordSetPage from "./WordSetPage";
import RegisterPage from "./RegisterPage";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/word-set/:id" component={WordSetPage} />
        </div>
      </Router>
    );
  }
}

export default App;
