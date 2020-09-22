import React from 'react';
import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class MyNavbar extends Component {

    render() {

      if (this.props.username === true)
        return (
          <Navbar bg="light" className='fluid'>
          <Navbar.Brand className="h1" href="http://localhost:3000/">Friends Of</Navbar.Brand>
           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
           </NavDropdown>
          </Navbar>
        )

      else
        return (
            <Navbar bg="light" className='fluid'>
              <Navbar.Brand className="h1" href="http://localhost:3000/">Friends Of</Navbar.Brand>
            </Navbar>
        );
    } 
} 

export default MyNavbar;
