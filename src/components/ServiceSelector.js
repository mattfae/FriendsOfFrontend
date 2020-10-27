import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class ServiceSelector extends Component {

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

    handleLogin() {
        console.log('clicked');
    }

    render() {
        return (
            <div className="serviceselector">
                <div className="row">

                <div className="col d-flex justify-content-center align-content-center">
                        <div className="card w-50 mt-5">
                            <h5 className="card-header">Friends Of</h5>
                              <div className="card-body">
                                <p className="card-text">Enter a Twitter account to see which accounts are most followed by the people whom <i>that</i> account follows</p>
                                <Form id="newaccountform" className="p-0" onSubmit={(e) => this.handleSubmit(e, this.state.username)}>
                                    <Form.Group controlId="formUsername">
                                        <Form.Label>Enter a Twitter Handle:</Form.Label>
                                        <Form.Control className="" type="username" placeholder="@username" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                                    </Form.Group>
                                    <Button variant="outline-info" type="submit" >Submit</Button>
                                </Form>
                            </div>
                            <p>*note: free API rate limiting makes this demo only.</p>
                        </div>
                    </div>

                    <div className="col d-flex justify-content-center align-content-center">
                        <div className="card w-50 mt-5">
                            <h5 className="card-header">Second Degree</h5>
                              <div className="card-body">
                                <p className="card-text">Enter two twitter accounts to see which accounts followed by the first themselves follow the second.</p>
                                <Link to="/seconddegree">
                                    Select Accounts
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ServiceSelector;
