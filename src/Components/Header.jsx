import React from "react";
import { Navbar, Container, Nav, Dropdown, Row, Col, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './Cart'

function Header() {
    return (
        <div>
            <Navbar className="navbar" expand="lg" bg="" variant="dark">
                <Container>
                    <Navbar.Brand className="navText justify-content" href="/">The Cloakroom Cafe <Image src="/images/coffee-beans.png" width="30rem" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/products">Order Online</Nav.Link>
                            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            <Dropdown>
                                <Dropdown.Toggle className="mx-4" variant="success" id="dropdown-basic">
                                    Admin Panel
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/admin/addproduct">Add Product</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/admin/manageproducts">Manage Products</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link as={Link} to="/location"><img src="/images/location-pin.png" width="30" height="30" alt="location" /></Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Cart />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}

export default Header