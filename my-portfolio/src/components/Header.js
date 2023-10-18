import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container> 
                <Navbar.Brand href="/">Reibean</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Link className="nav-link" to="/aboutme">About Me</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;