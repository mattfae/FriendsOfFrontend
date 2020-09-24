import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const FriendPair = props => {
  
  return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={props.indexk}>
            {props.rel}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={props.indexk}>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
  )
}

export default FriendPair;
