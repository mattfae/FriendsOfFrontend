import React from 'react';
import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import FriendPair from './FriendPair';

class FriendsOf extends Component {


    renderFriendsOf() {
        const allFriendsOf = this.props.friendPairs.map((rel, index) => (
            <FriendPair rel={rel} key={index} okey={index} />
        ));

        return (
            <div>
            <h1>Friends Of Friends of {this.props.username}</h1>
            <ListGroup>
            {allFriendsOf}
            </ListGroup>
            </div>
        );
    }

    render() {

        return (
            <div>
                <div>{this.renderFriendsOf()}</div>
            </div>
        )
    }
}

export default FriendsOf;
