import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Divider from "material-ui/Divider";

const LandingCard = props => (
  <Card>
    <CardTitle className="landing__title" style={{fontSize: "40px"}} title={props.title} subtitle={props.subtitle} />
    <CardText className="landing__text">
      {props.text}
    </CardText>
    <Divider />
    <CardMedia >
      <img src={props.image} alt="" />
    </CardMedia>

    {/* <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions> */}
  </Card>
);

export default LandingCard;