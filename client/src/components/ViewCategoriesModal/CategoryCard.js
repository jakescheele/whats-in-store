import React, { Component } from "react";
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'
import SubcategoryCardBody from "./SubcategoryCardbody"
import CategoryOverlay from "../../components/ViewCategoriesModal";




class CategoryCard extends Component {



    render() {
        return (
            <>
            <CategoryOverlay></CategoryOverlay>

            <Card className="py-1 rem-0.1875 mb-2">
                
                <Card.Body className="p-0 my-2">
                    <div className="p-0 m-0 d-flex">
                        <div className="mr-auto">
                            <input value={this.props.category.name}></input>
                        </div>
                        <div>
                            <Button onclick={this.props.addCat} className="mr-2" size="sm" variant="success">+ extend</Button><Button onClick={this.props.catDelete} size="sm" variant="danger">- delete</Button>
                        </div>
                    </div>
                </Card.Body>
                {this.props.category.subcategories.map(subcategory=>(
                    <SubcategoryCardBody subcategory={subcategory}/>
                ))}
            </Card>
            </>)
    }
}

export default CategoryCard