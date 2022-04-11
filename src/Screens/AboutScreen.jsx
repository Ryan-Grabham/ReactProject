import React from 'react'
import { Button, Image, Row, Col, Container } from 'react-bootstrap'

function AboutScreen() {
    return (
        <div>
            <Container className="my-5 text-center">
                <h2>About us!</h2>
            </Container>
            <Container className="indexCard" >
                <Row className="my-5 text-center">
                    <Col className="py-5" >
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis finibus aliquet. Proin quis gravida felis, eget mattis nisl. Mauris mollis nulla massa, at commodo eros fermentum quis. Sed pulvinar rutrum erat quis congue.</h3>

                    </Col>
                    <Col className="px-0">
                        <Image fluid src="/images/CoffeePour.jpg" />
                    </Col>
                </Row>
            </Container>
            <Container className="indexCard" >
                <Row className="my-5 text-center">
                    <Col className="px-0">
                        <Image fluid src="/images/CoffeePour.jpg" />
                    </Col>
                    <Col className="py-5">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis finibus aliquet. Proin quis gravida felis, eget mattis nisl. Mauris mollis nulla massa, at commodo eros fermentum quis. Sed pulvinar rutrum erat quis congue.</h3>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default AboutScreen
