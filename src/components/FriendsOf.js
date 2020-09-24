import React from 'react';
import { Component } from 'react';
import { Accordion } from 'react-bootstrap';
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
            this.setState({friendPairs: resp})
        });
    }

    renderFriendsOf() {
        const allFriendsOf = this.state.friendPairs.map((rel, index) => (
            <FriendPair rel={rel} key={index} />
        ));

        return (
            <div>
            <h1>Friends Of Friends of {this.props.username}</h1>
            <Accordion defaultActiveKey="0">
            {allFriendsOf}
            </Accordion>
            </div>
        );
    }

    render() {

        return (
            <div>
                {this.state.friendPairs === null
                ?
                <h1>{console.log("loading", this.state)}Loading...</h1>
                :
                <h1>{console.log("done", this.state)}{this.renderFriendsOf()}</h1>}
            </div>
        )
    }
}

export default FriendsOf;
