import React from 'react';
import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class MyNavbar extends Component {

    render() {
        return (
                <Navbar bg="light" className='fluid'>
                  <Navbar.Brand className="h1" href="http://localhost:3000">Friends Of</Navbar.Brand>
                </Navbar>
        );
    }
}

export default MyNavbar;
