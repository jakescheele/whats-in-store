import React, { Component } from "react";
import {Container, Col, Row, Card, Form} from 'react-bootstrap'

function ProductCard() {

    return (<>
        <Col xs={12} md={6} lg={4} className="px-1 pb-2">
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://dummyimage.com/600x400/55595c/fff" />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                                </Card.Text>
                    <p>Price: $ 99.00 </p>
                    <p>Stock: 1000 </p>
                </Card.Body>
            </Card>
        </Col>
    </>)
}

export default ProductCard