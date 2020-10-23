import React, { Component } from 'react';
import twitLogin from '../assets/twit.png';

class TwitLogin extends Component {

    handleLogin() {
        console.log('clicked');
    }

    render() {
        return (
            <div className="container d-flex h-100 justify-content-center">
                <div className="my-auto">
                <input type="image" src={twitLogin} alt="Twitter Login" onClick={() => this.handleLogin()} />
                </div>
            </div>
        );
    }
}

export default TwitLogin;
