import React, { Component } from "react";
import { Container, Col, Row, Card, Form } from 'react-bootstrap'

class ProductCard extends Component {
    state = {
        total: 0
    }
    componentDidMount() {
        let total = 0
        this.props.product.stock.forEach(element => {

            total += parseFloat(element.stock)
            this.setState({
                total: total
            })
        })
    }
    render() {
        console.log(this.props.product)
        return (<>
            <Col xs={12} sm={12} md={6} lg={4} className="rem-0.0625 pb-2">
                <Card
                    style={{ width: '100%' }}
                    onClick={(e) => this.props.show(this.props.product._id, "productModal")}
                >
                    {this.props.product.image.img_url ? 
                    (<Card.Img variant="top" src={this.props.product.image.img_url} />) 
                    : (<Card.Img variant="top" src="" />)}
                    <Card.Body>
                        <Card.Title
                            className="product-name">{this.props.product.name}</Card.Title>
                        <div className="product-description">{this.props.product.description}</div>
                        <hr></hr>
                        <h5>Price: $ {this.props.product.price} </h5>
                        <h5>Stock: {this.state.total}</h5>


                    </Card.Body>
                </Card>
            </Col>
        </>)
    }
}

export default ProductCard