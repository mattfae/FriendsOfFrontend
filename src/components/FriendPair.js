import React from 'react';
import { ListGroup } from 'react-bootstrap';

const FriendPair = props => {
  
  return (

          <ListGroup.Item><b>{this.props.rel[0]}</b>: Friends with {this.props.rep[1].map((f) => `@${f} `)}.</ListGroup.Item>

        // <Card>
        //   <Accordion.Toggle as={Card.Header} eventKey={props.key}>
        //     {props.rel[0]}
        //   </Accordion.Toggle>
        //   <Accordion.Collapse eventKey={props.key}>
        //     <Card.Body>
        //       Friends with:
        //       {this.props.rel[1].map(friend => (
        //         friend
        //       ))}
        //     </Card.Body>
        //   </Accordion.Collapse>
        // </Card>
  )
}

export default FriendPair;
