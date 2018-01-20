import React from 'react';
import { connect } from "react-redux";
import { createWordSet, changeWordSet, deleteWordSet } from "../actions/wordSets";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
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
      <div className="drawer" key={index}>
        {this.props.sets.length > 1 &&
          <IconButton onClick={
            () => this.props.dispatch(deleteWordSet(wordSet._id, this.props.username))}>
            <Cancel className="drawer__delete" />
          </IconButton>
        }
        <MenuItem className="drawer__menu-item" key={wordSet._id} onClick={
          () => {
            console.log("I'M BEING CLICKED");
            this.props.dispatch(changeWordSet(wordSet._id))
            this.handleClose()
          }}>
          {wordSet.title}
        </MenuItem>
      </div>
    ));
    return (
      <div>
        <IconButton className="word-set__button--more" onClick={this.handleToggle}>
          <MoreVert />
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

const mapStateToProps = state => ({
  sets: state.wordSets.sets
});

export default connect(mapStateToProps)(WordSetDrawer);