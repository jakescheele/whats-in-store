import React, { Component } from "react";
import {  Col, Card  } from 'react-bootstrap'

class ProductCard extends Component {
    
    render() {
        return (<>
            <Col xs={12} sm={12} md={6} lg={4} className="rem-0.0625 pb-2">
                <Card style={{ width: '100%' }} onClick={(e) => this.props.show(this.props.product._id, "productModal")}>
                    {this.props.product.hasOwnProperty('image') ? 
                    (<Card.Img variant="top" src={this.props.product.image.img_url} />) 
                    : (<Card.Img variant="top" src={process.env.PUBLIC_URL + '/placeholder.png'} />)}
                    <Card.Body>
                        <Card.Title
                            className="product-name">{this.props.product.name}</Card.Title>
                        <div className="product-description">{this.props.product.description}</div>
                        <hr></hr>
                        <h5>Price: $ {this.props.product.price} </h5>
                        <h5>Stock: {this.props.product.totalStock}</h5>


                    </Card.Body>
                </Card>
            </Col>
        </>)
    }
}

export default ProductCard