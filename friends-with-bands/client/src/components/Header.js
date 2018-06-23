import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

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
                        <Nav pullRight><NavItem eventKey={1} href="#musicians">Looking for a Musician</NavItem></Nav>
                        <Nav pullRight><NavItem eventKey={2} href="#bands">Looking for a Band</NavItem></Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;

