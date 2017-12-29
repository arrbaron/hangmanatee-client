import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Landing from "./components/Landing";
import WordSet from "./components/WordSet";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Landing} />
          <Route exact path="/word-set/:id" component={WordSet} />
        </div>
      </Router>
    );
  }
}

export default App;
