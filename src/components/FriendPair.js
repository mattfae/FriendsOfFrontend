import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const FriendPair = props => {
  
  return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={props.indexk}>
            {props.rel[0]}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={props.indexk}>
            <Card.Body>
              Friends with:
              {props.rel[1].map(friend => (
                friend
              ));}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
  )
}

export default FriendPair;
