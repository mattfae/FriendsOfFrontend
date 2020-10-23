import React from 'react';
import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class AccountSelector extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            successfulPOST: false,
            friendPairs: null
          };
      }
    
    handleSubmit = (event, inputName) => {
      event.preventDefault();
      const reqObj = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "username": inputName
                })
              }
      fetch('http://localhost:3000/twitter_accounts', reqObj)
      .then(resp => resp.json())
      .then(acctResp => {
        fetch(`http://localhost:3000/friendship_analyses/${acctResp.id}`)
          .then(resp => resp.json())
          .then(frResp => {
            console.log(frResp)
            this.setState({
              username: inputName,
              successfulPOST: true,
              friendPairs: frResp
                })
              });
          });
    }

    handleChange(event) {
      this.setState({username: event.target.value});
    }

    render() {
        return (
            <Container className="fluid justify-content-center">
                <Form id="newaccountform" bg="dark" className="justify-self-center" onSubmit={(e) => this.handleSubmit(e, this.state.username)}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Enter a Twitter Handle</Form.Label>
                        <Form.Control className="col-4" type="username" placeholder="@username" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                    </Form.Group>
                    <Button variant="outline-info" type="submit" >Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default AccountSelector;
