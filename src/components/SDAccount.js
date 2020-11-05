import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SDAccount = (props) => {

  return (
    <ListGroup.Item action variant="light" href={`http://www.twitter.com/${props.acct[1]}`}>
      <b>"{props.acct[0]}"</b>
      <br/>
      @{props.acct[1]}
    </ListGroup.Item>
  )
}

export default SDAccount;
