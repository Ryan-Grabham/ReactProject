import React from "react";
import { Navbar, Container, Nav, Dropdown, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar className="navbar" bg="" variant="dark">
                <Container  className="flex-column">
                    <Row>
                        <Col>
                            <Navbar.Brand href="#home">The Cloakroom Cafe</Navbar.Brand>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav.Link href="#home"><img src="/images/twitter-sign.png" width="30" height="30" alt="twitter" /></Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href="#home"><img src="/images/facebook.png" width="30" height="30" alt="facebook" /></Nav.Link>
                        </Col>

                        <Col>
                            <Nav.Link href="#home"><img src="/images/coffee-beans.png" width="30" height="30" alt="logo" /></Nav.Link>
                        </Col>

                        <Col>
                            <Nav.Link href="#home"><img src="/images/location-pin.png" width="30" height="30" alt="location" /></Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href="#home"><img src="/images/user.png" width="30" height="30" alt="account" /></Nav.Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Coffee Club</Nav.Link>
                                <Nav.Link href="#pricing">Order Online</Nav.Link>
                                <Nav.Link href="#features">Reviews</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>



                </Container>
            </Navbar>
        </div>
    )
}

export default Header