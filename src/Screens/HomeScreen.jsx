import React from 'react'
import {Button, Image, Row, Col, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function HomeScreen() {
    return(
        <div>
            <Container className="indexCard" >
            <Row className="my-5">
                <Col >
                <h2>Coffee</h2>
                </Col>
                <Col className="px-0">
                <Image  fluid src="/images/CoffeePour.jpg"/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default HomeScreen

