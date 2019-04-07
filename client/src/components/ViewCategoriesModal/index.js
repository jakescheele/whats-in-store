import React, { Component } from "react";
import {Col, Row, Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import CategoryCard from "./CategoryCard";
import axios from "axios";

class CategoryModal extends Component {
    state={
        subcategory:""
    }
    
    render() {
        return (
        <>
            <Modal show={this.props.state} onHide={(e)=>this.props.close("categoryModal")}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Categories
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <InputGroup className="mb-3" size="sm">
                                    <FormControl
                                        placeholder="New category name"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        name="cata" onChange={this.props.handleChange}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary" onClick={this.props.submitForm} size="sm">Add New Category</Button>
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