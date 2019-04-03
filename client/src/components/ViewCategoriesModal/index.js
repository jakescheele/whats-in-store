import React, { Component } from "react";
import { Container, Col, Row, Card, Form } from 'react-bootstrap'
import CategoryCard from "./CategoryCard";




class CategoryModal extends Component {
    // constructor(props) {
    //   super(props);
    state = {
        show: false,
        product: '',
        price: '',
        category: ''
    };

    handleChangeProduct = (event) => {
        this.setState({ product: event.target.value });
    }
    handleChangePrice = (event) => {
        this.setState({ price: event.target.value });
    }
    handleChangeCategory = (event) => {
        this.setState({ category: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        return (
        <>
            <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        EDIT Categories
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CategoryCard/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.close}>
                            Close
                    </Button>
                    <Button variant="primary" onClick={this.props.close}>
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