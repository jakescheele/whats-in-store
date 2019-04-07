import React, { Component } from "react";
import '../../fileButton.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Form, Col, Modal } from "react-bootstrap";
import SalesModal from "../components/Dashboard/LineChart/salesModal"

class ProfileInputForm extends Component {
   

    render() {
        return (
            <>
                <Container>
                <Col md={{ span: 6 }}>
                    <Form>
                        <Form.Group controlId="form-group">
                            <Form.Label className ="text-light">Email address</Form.Label>
                            <Form.Control value={this.props.shop.email} onChange={this.handleChange} type="email" placeholder="Your Email" />
                        </Form.Group>
                        <Form.Group controlId="shopName">
                            <Form.Label className ="text-light">Shop Name</Form.Label>
                            <Form.Control value={this.props.shop.shopName} onChange={this.handleChange} type="shopName" placeholder="Your Shop Name" />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label className ="text-light">Shop Description</Form.Label>
                            <Form.Control value={this.props.shop.description} as="textarea" rows="5" onChange={this.handleChange} type="description" placeholder="Your Shop Description" />
                        </Form.Group>
                        {/*<Form.Group controlId="shopLogo">
                        <label class="border">
                            <Form.Label className ="text-light">Upload Logo</Form.Label>
                        </label>
                            <label class="fileContainer">
                            <Form.Control onChange={this.handleChange} 
                            type="file" class="fileButton" name="image" display="none" placeholder="Your Shop Logo"/>
                        </label>
                        </Form.Group>*/}
                        <Button variant="primary" type="submit" onSubmit={this.formSubmit} onClick={this.formSubmit} >
                        Submit
                        </Button>
                    </Form>
                    </Col>

                    <Col md={{ span: 6 }}>
                    
                    </Col>

                </Container>
            </>

        );
    }
}

export default ProfileInputForm;