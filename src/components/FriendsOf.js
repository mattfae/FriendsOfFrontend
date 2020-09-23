import React from 'react';
import { Component } from 'react';


class FriendsOf extends Component {

    componentDidMount() {
        console.log("idk")
    }

    render() {
        return (
            <div>
            <h1>Hmm</h1>
            <h2>{this.props.username}</h2>
            <h3>k.</h3>
            </div>
        )
    }
}

export default FriendsOf;
