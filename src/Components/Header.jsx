import React from "react";
import { Navbar, Container, Nav, Dropdown, Row, Col, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar className="navbar" expand="lg" bg="" variant="dark">
                <Container>
                    <Navbar.Brand className="justify-content" href="#home">The Cloakroom Cafe <Image src="/images/coffee-beans.png" width="30rem" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Coffee Club</Nav.Link>
                            <Nav.Link href="#pricing">Order Online</Nav.Link>
                            <Nav.Link href="#features">Reviews</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link href="#home"><img src="/images/location-pin.png" width="30" height="30" alt="location" /></Nav.Link>
                            <Nav.Link href="#home"><img src="/images/user.png" width="30" height="30" alt="account" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}

export default Header