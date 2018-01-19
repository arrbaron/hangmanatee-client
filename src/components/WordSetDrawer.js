import React from 'react';
import { connect } from "react-redux";
import { createWordSet, changeWordSet, deleteWordSet } from "../actions/wordSets";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import IconButton from 'material-ui/IconButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Divider from 'material-ui/Divider';
import "../styles/WordSetDrawer.css";

class WordSetDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const wordSets = this.props.wordSets.map((wordSet, index) => (
      <MenuItem className="drawer__menu-item" key={wordSet._id}>
        <IconButton onClick={
          () => this.props.dispatch(deleteWordSet(wordSet._id, this.props.username))}>
          <Cancel />
        </IconButton>
        <span onClick={
          () => {
            console.log("I'M BEING CLICKED");
            this.props.dispatch(changeWordSet(wordSet._id))
            this.handleClose()
          }}>
          {wordSet.title}
        </span>
      </MenuItem>
    ));
    return (
      <div>
        <IconButton className="word-set__icon--more" onClick={this.handleToggle}>
          <MoreHoriz />
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <p>My Wordsets</p>
          <Divider />
          {wordSets}
          <IconButton onClick={() => this.props.dispatch(createWordSet(this.props.username))}>
            <AddCircle />
          </IconButton>
        </Drawer>
      </div>
    );
  }
}

export default connect()(WordSetDrawer);