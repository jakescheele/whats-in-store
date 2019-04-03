import React, { Component } from "react";
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'
import SubcategoryCardBody from "./SubcategoryCardbody"


class CategoryCard extends Component {



    render() {
        return (
            <Card className="py-1 px-3 mb-2">
                
                <Card.Body className="p-0 my-2">
                    <div className="p-0 m-0 d-flex">
                        <div className="mr-auto">
                            <input value={this.props.category.name}></input>
                        </div>
                        <div>
                            <Button className="mr-2" size="sm" variant="success">+ extend</Button><Button size="sm" variant="danger">- delete</Button>
                        </div>
                    </div>
                </Card.Body>
                {this.props.category.subcategories.map(subcategory=>(
                    <SubcategoryCardBody subcategory={subcategory}/>
                ))}
            </Card>)
    }
}

export default CategoryCard