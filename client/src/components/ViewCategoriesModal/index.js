import React, { Component } from "react";
import {Col, Row, Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import CategoryCard from "./CategoryCard";
import axios from "axios";
import CategoryOverlay from "../../components/ViewCategoriesModal";




class CategoryModal extends Component {
    state={
        subcategory:""
    }
    
    render() {
        return (
        <>
            <Modal show={this.props.state} onHide={(e)=>this.props.close("categoryModal")}>
                <Modal.Header closeButton>
                    <div className="modalHeader">
                    <Modal.Title id="contained-modal-title-vcenter">
                        VIEW/EDIT CATEGORIES
                    </Modal.Title>
                    </div>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <InputGroup className="mb-3" size="sm">
                                    <div className="input">
                                    <FormControl
                                        placeholder="New Category Name"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        name="cata" onChange={this.props.handleChange}
                                    />
                                    </div>
                                    <InputGroup.Append>
                                        <button className="whiteButton" variant="outline-secondary" onClick={this.props.submitForm} size="sm">Add New Category</button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Row>
                        {this.props.categories.map((category,i) => (
                            <CategoryCard updateState={this.props.updateState} categoryDelete={this.categoryDelete} key={i} category={category} />
                        ))}

                    </Modal.Body>
            </Modal>
        </>
        );
    }
}

// function CategoryList(props) {

//     return (<Form>
//         <Form.Group controlId="formBasicChecbox" className="mb-2">
//             <Form.Check type="checkbox" value={props.category.name} label={props.category.name} />
//         </Form.Group>
//         <div className="pl-4">
//             <Form.Group controlId="formBasicChecbox">
//                 {props.category.sub_category.map(sub_category => (<Form.Check type="checkbox" value={sub_category.name} label={sub_category.name} />))}
//             </Form.Group>
//         </div>
//     </Form>)
// }

export default CategoryModal