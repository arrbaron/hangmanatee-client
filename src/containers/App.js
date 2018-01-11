import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Router,
  Route,
} from "react-router-dom";
import history from "../history";
import { loginUserSuccess } from "../actions/user";
import LandingPage from "./LandingPage";
import WordSetPage from "./WordSetPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import GamePage from "./GamePage";
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    const authToken = localStorage.getItem("item");
    this.props.dispatch(loginUserSuccess, authToken);
  }
  
  render() {
    return (
      <Router history={history}>
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

export default connect()(App);
