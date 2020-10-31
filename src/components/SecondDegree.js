import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SDResults from './SDResults';


class SecondDegree extends Component {

    constructor() {
        super();
        this.state = {
            targetUsername: '',
            subjectUsername: '',
            loading: false,
            successfulPOST: false,
            respData: null
          };
      }
    
    handleSubmit = (event, tName, sName) => {
        event.preventDefault();
        this.setState({loading: true})
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
            this.setState({loading: false, successfulPOST: true, respData: resp})
            });
    }

    targetChange(event) {
        this.setState({targetUsername: event.target.value});
    }

    subjectChange(event) {
        this.setState({subjectUsername: event.target.value});
    }

    render() {

        const loading = this.state.loading;

        if(this.state.successfulPOST === true) {
            return (
                <SDResults targetUsername={this.state.targetUsername} subjectUsername={this.state.subjectUsername} respData={this.state.respData} />
            );
        }
        else {
            return (
                <div className="container h-100">
                    <div className="row">

                        <div className="col-4"></div>

                        <div className="col-4">
                            <h2 className="mt-2">Second Degree Connections</h2>
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
                        {loading && 
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4">Loading</div>
                            <div className="col-4"></div>
                        </div>
                        }
                </div>
            );
        }
    }
}

export default SecondDegree;
