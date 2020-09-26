import React from 'react';
import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import FriendPair from './FriendPair';

class FriendsOf extends Component {

    constructor() {
        super()
        this.state = {
            friendPairs: null
        }
    }

    componentDidMount() {

        fetch(`http://localhost:3000/friendship_analyses/${this.props.instanceId}`)
        .then(resp => resp.json())
        .then(resp => {
            console.log("setting state")
            this.setState({friendPairs: resp})
        });
    }

    renderFriendsOf() {
        const allFriendsOf = this.state.friendPairs.map((rel, index) => (
            <FriendPair rel={rel} key={index} />
        ));

        return (
            <div>
            {console.log("rendering Friends in FriendsOf, props:", this.props)}
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
                {this.state.friendPairs === null
                ?
                <h1>{console.log("loading FriendsOf", this.state)}Loading...</h1>
                :
                <h1>{console.log("loaded FriendsOf", this.state)}{this.renderFriendsOf()}</h1>}
            </div>
        )
    }
}

export default FriendsOf;
