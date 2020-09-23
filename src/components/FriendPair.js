import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const FriendPair = props => {
  
  return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {this.props}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
  )
}

export default FriendPair;
