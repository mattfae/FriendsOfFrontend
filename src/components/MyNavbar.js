import React from 'react';
import { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

class MyNavbar extends Component {

      constructor(props) {
        super()
      }

      render() {

        return (
          <Navbar bg="dark" variant="dark" className='fluid'>
          <Navbar.Brand href="http://localhost:3000/">Friends Of</Navbar.Brand>
          {this.props.username &&
          <Nav>
            <Navbar.Text>
              now exploring:
            </Navbar.Text>
            <Nav.Link href={`www.twitter.com/${this.props.username}`} >{this.props.username}</Nav.Link>
              <NavDropdown title="Views" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Friends Of</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Networked Followers</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something Else</NavDropdown.Item>
              </NavDropdown>
          </Nav>
          }
          </Navbar>
        );
    } 
} 

export default MyNavbar;
