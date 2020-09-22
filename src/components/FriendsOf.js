import React from 'react';
import { Component } from 'react';


class FriendsOf extends Component {

    componentDidMount() {
        console.log("FriendsOf render", this.props)
    }

    render() {
        return (
            <div>
                <Navbar />
            <h1>Hmm</h1>
            <h2>{this.props.username}</h2>
            <h3>k.</h3>
            </div>
        )
    }
}

export default FriendsOf;
