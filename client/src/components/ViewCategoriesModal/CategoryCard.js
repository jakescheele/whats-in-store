import React, { Component } from "react";
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'



class CategoryCard extends Component {



    render() {
        return (
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <input value="Clothes"></input>
                        </Col>
                        <Col>
                            <Button variant="success">+</Button><Button variant="danger">-</Button>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Body>
                    <Row>
                        <Col>
                            <input value="Bottoms"></input>
                        </Col>
                        <Col>
                            <Button variant="success">+</Button><Button variant="danger">-</Button>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Body>
                    <Row>
                        <Col>
                            <input value="Tops"></input>
                        </Col>
                        <Col>
                            <Button variant="success">+</Button><Button variant="danger">-</Button>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Body>
                    <Row>
                        <Col>
                            <input value=""></input>
                        </Col>
                        <Col>
                            <Button variant="success">+</Button><Button variant="danger">-</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>)
    }
}

export default CategoryCard