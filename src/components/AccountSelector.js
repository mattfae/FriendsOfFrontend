import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class AccountSelector extends Component {

    constructor() {
        super();
        this.state = {value: ''};
      }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/friendsof');
        console.log(this.state.value);
    }

    render() {
        return (
            <Container className="fluid justify-content-center">
                <Form id="newaccountform" className="justify-self-center" onSubmit={(e) => this.handleSubmit(e)}>
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

export default withRouter(AccountSelector);
