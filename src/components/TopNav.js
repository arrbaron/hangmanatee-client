import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import FavIcon from './FavIcon';
import Login from "./Login";
import Logged from "./Logged";
import "../styles/TopNav.css";

Logged.muiName = 'IconMenu';

class TopNav extends Component {
  render() {
    return (
      <div>
        <AppBar
          className="top-nav"
          title="HmT"
          iconElementLeft={<Link to="/"><FavIcon /></Link>}
          iconElementRight={this.props.currentUsername ? <Logged /> : <Login />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUsername: state.user.currentUser.username
});

export default connect (mapStateToProps)(TopNav);