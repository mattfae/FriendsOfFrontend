import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class SecondDegree extends Component {

    constructor() {
        super();
        this.state = {
            targetUsername: '',
            subjectUsername: '',
            successfulPOST: false,
            respData: null
          };
      }
    
    handleSubmit = (event, tName, sName) => {
        event.preventDefault();
        console.log(event, tName, sName);
        const reqObj = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        "second_degree": {
                        target_username: tName,
                        subject_username: sName
                        }
                    })
                }
        fetch('http://localhost:3000/second_degrees', reqObj)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            });
    }

    targetChange(event) {
        console.log(event.target.value)
        this.setState({targetUsername: event.target.value});
    }

    subjectChange(event) {
        console.log(event.target.value)
        this.setState({subjectUsername: event.target.value});
    }

    render() {
        return (
            <div className="container h-100">
                <div className="row">

                    <div className="col-4"></div>

                    <div className="col-4">
                        <h2>Mutual Connections</h2>
                        <Form id="newaccountform" className="mt-4 p-2" onSubmit={(e) => this.handleSubmit(e, this.state.targetUsername, this.state.subjectUsername)}>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Look at who this person follows...</Form.Label>
                                <Form.Control className="" type="targetUsername" placeholder="@username" value={this.state.value} onChange={(e) => this.targetChange(e)}/>
                                <Form.Label>... and see if any follow this person:</Form.Label>
                                <Form.Control className="" type="subjectUsername" placeholder="@username" value={this.state.value} onChange={(e) => this.subjectChange(e)}/>
                            </Form.Group>
                            <Button variant="outline-info" type="submit" >Submit</Button>
                        </Form>
                    </div>

                    <div className="col-4"></div>

                </div>
            </div>
        );
    }
}

export default SecondDegree;
