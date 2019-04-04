import React, { Component } from "react";
import { Container, Col, Row, Card, Form, Modal, Button } from 'react-bootstrap'
import CategoryCard from "./CategoryCard";




class CategoryModal extends Component {
    // constructor(props) {
    //   super(props);
    state = {
        categories: ""
    };

    // handleChangeProduct = (event) => {
    //     this.setState({ product: event.target.value });
    // }
    // handleChangePrice = (event) => {
    //     this.setState({ price: event.target.value });
    // }
    // handleChangeCategory = (event) => {
    //     this.setState({ category: event.target.value });
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    // }


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
                            <Button className="mb-2 float-right" variant="success" size="sm" >
                                + Add New Category
                            </Button>
                        </Col>
                    </Row>
                    {this.props.categories.map(category=>(
                        <CategoryCard key={category.name} category={category}/>
                    ))}
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(e)=>this.props.close("categoryModal")}>
                            Close
                    </Button>
                    <Button variant="primary" onClick={(e)=>this.props.close("categoryModal")}>
                            Save Changes
                    </Button>
                </Modal.Footer>
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