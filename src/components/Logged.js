import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/user";
import { clearSets } from "../actions/wordSets";
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const Logged = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.dispatch(logoutUser());
    props.dispatch(clearSets());
  };
  
  return (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText={`Hi, ${props.username}!`} />
      <Divider />
      <Link to="/word-set/my"><MenuItem primaryText="My Wordsets" /></Link>
      <MenuItem primaryText="Play" />
      <Link to="/" onClick={() => handleLogout()}><li><MenuItem primaryText="Logout" /></li></Link>
    </IconMenu>
  )
};

const mapStateToProps = state => ({
  username: state.user.currentUser.username
});

export default connect(mapStateToProps)(Logged);