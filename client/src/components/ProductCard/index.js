import React, { Component } from "react";
import {Container, Col, Row, Card, Form} from 'react-bootstrap'

function ProductCard(props) {

    return (<>
        <Col xs={12} sm={12} md={6} lg={4} className="px-1 pb-2">
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={props.product.image} onClick={props.view}/>
                <Card.Body>
                    <Card.Title className="product-name">{props.product.name}</Card.Title>
                    <Card.Text>
                        <div className="product-description">{props.product.description}</div>
                    </Card.Text>  
                        <div>Price: $ {props.product.price} </div>
                        <div>Stock: {props.product.stock} </div>
                </Card.Body>
            </Card>
        </Col>
    </>)
}

export default ProductCard