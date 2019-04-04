import React, { Component } from "react";
import {Container, Col, Row, Card, Form} from 'react-bootstrap'

function ProductCard(props) {

    return (<>
        <Col xs={12} sm={12} md={6} lg={4} className="rem-0.0625 pb-2">
            <Card style={{ width: '100%' }} onClick={(e)=>props.show(props.product._id, "productModal")}>
                <Card.Img variant="top" src={props.product.image}/>
                <Card.Body>
                    <Card.Title className="product-name">{props.product.name}</Card.Title>
                        <div className="product-description">{props.product.description}</div>
                        <hr></hr>
                        <h5>Price: $ {props.product.price} </h5>
                        <h5>Stock: {props.product.stock} </h5>
                </Card.Body>
            </Card>
        </Col>
    </>)
}

export default ProductCard