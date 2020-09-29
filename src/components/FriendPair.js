import React from 'react';
import { ListGroup } from 'react-bootstrap';

const FriendPair = props => {

  return (

          <ListGroup.Item>
            <b>{props.rel[0]}</b>
            : followed by :
            {console.log("friendpair props:", props.rel)}
            {props.rel[1].map((f) => `@${f} `)}.
            </ListGroup.Item>
            
  )
}

export default FriendPair;
