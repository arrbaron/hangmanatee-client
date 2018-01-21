import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Divider from "material-ui/Divider";

const CardExampleWithAvatar = props => (
  <Card>
    <CardTitle className="landing__title" style={{fontSize: "40px"}} title={props.title} subtitle={props.subtitle} />
    <CardText className="landing__text">
      {props.text}
    </CardText>
    <Divider />
    <CardMedia 
      overlay={<CardTitle title={props.title} />}
    >
      <img src={props.image} alt="" />
    </CardMedia>

    {/* <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions> */}
  </Card>
);

export default CardExampleWithAvatar;