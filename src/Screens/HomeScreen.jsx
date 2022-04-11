import React from 'react'
import {Button, Image, Row, Col, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function HomeScreen() {
    return(
        <div>
            <Container className="indexCard" >
            <Row className="my-5 text-center">
                <Col className="py-5" >
                <h2>Order for Collection</h2>
                <br/>
                <h3>Coffee <br />Smoothies<br />Cakes</h3>
                <Button as={Link} to="/products">Order Now</Button>
                </Col>
                <Col className="px-0">
                <Image  fluid src="/images/CoffeePour.jpg"/>
                </Col>
            </Row>
            </Container>
            <Container className="indexCard" >
            <Row className="my-5 text-center">
            <Col className="px-0">
                <Image  fluid src="/images/CoffeePour.jpg"/>
                </Col>
                <Col className="py-5">
                <h2>Our Coffee</h2>
                <br />
                <h3>Learn about us and our products</h3>
                <Button as={Link} to="/about">About us</Button>
                </Col>
                
            </Row>
            </Container>
        </div>
        
    )
}

export default HomeScreen

