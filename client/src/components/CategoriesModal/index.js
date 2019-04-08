import React, { Component } from "react";
import {Col, Row, Modal, InputGroup, FormControl, Button } from 'react-bootstrap'
import CategoryCard from "./CategoryCard";





class CategoriesModal extends Component {
    state={
        subcategory:""
    }
    
    render() {
        return (
        <>
            <Modal size="lg" show={this.props.state} onHide={(e)=>this.props.close("categoriesModal")}>
                <Modal.Header className="modalHeader" closeButton>
                    
                    <Modal.Title id="contained-modal-title-vcenter">
                        VIEW/EDIT CATEGORIES
                    </Modal.Title>
                    
                    </Modal.Header>
                    <Modal.Body style={{ 'height': 'calc(100vh - 280px)', 'overflowY': 'auto' }}>
                        <Row>
                            <Col>
                            <Button className="mb-2" variant="outline-success" onClick={this.props.addCat} size="sm">+ Add New Category</Button>
                            </Col>
                        </Row>
                        {this.props.categories.map((category,i) => (
                            <CategoryCard 
                            // updateState={this.props.updateState} 
                            // categoryDelete={this.categoryDelete} 
                            key={category._id} 
                            index={i}
                            category={category}
                            updateCat={this.props.updateCat}
                            addSubCat={this.props.addSubCat}
                            deleteCat={this.props.deleteCat}
                            updateSubCat={this.props.updateSubCat}
                            deleteSubCat={this.props.deleteSubCat}
                            />
                        ))}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={(e) => this.props.close("categoriesModal")}>
                        Close
                        </Button>
                        <Button type="submit" variant="outline-dark" onClick={this.props.submitCats}>
                        Save Changes
                        </Button>
                    </Modal.Footer>
            </Modal>
        </>
        );
    }
}

export default CategoriesModal