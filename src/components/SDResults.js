import React from 'react';
import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import SDAccount from './SDAccount';

class SDResults extends Component {


    renderSecondDegrees() {
        const secondDegrees = this.props.respData.map((acct, index) => (
            <SDAccount acct={acct} key={index} okey={index} />
        ));

        return (
            <div>
            <ListGroup>
            {secondDegrees}
            </ListGroup>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div><h1>Accounts followed by {this.props.targetUsername} who follow {this.props.subjectUsername}</h1></div>
                <div>
                    {this.renderSecondDegrees()}
                </div>
            </div>
        )
    }
}

export default SDResults;
