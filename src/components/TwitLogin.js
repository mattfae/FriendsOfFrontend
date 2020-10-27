import React, { Component } from 'react';

class TwitLogin extends Component {

    constructor() {
       super()
       this.state = { data: [] }
    }

    componentDidMount() {
        fetch('http://localhost:3000/auth/twitter', { headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
        });
    }

    render() {
        return (
            <div>
                <h1>test.</h1>
            </div>
        );
    }
}

export default TwitLogin;
