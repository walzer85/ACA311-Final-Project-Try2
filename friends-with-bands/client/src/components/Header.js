import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar fixedTop inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {/* Add this back in once I get back to a working state */}
                            {/* <Image src="https://image.freepik.com/free-icon/drum-set-silhouette_318-41375.jpg" /> */}
                            <a href="#brand">Friends With Bands</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight><NavItem eventKey={1}><Link to={'/musicians'}>Looking for a Musician</Link></NavItem></Nav>
                        <Nav pullRight><NavItem eventKey={2}><Link to={'/requests'}>Looking for a Band</Link></NavItem></Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;

