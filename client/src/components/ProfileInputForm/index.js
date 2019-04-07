import React, { Component } from "react";
import '../../fileButton.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

import { Button, Container, Form, Col, Row } from "react-bootstrap";
import { relative } from "path";

class ProfileInputForm extends Component {

    render() {
        return (
            <>
                <Container>
                    <Row className="p-0 justify-content-center">
                        <Col sm="auto" md="auto" lg="auto">
                        {this.props.logo.logo_url?( <img src={this.props.logo.logo_url}/>):(<img src={process.env.PUBLIC_URL + '/logoPlaceholder.png'}/>)}
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Group controlId="shopLogo">
                            <label className="border">
                                <Form.Label className ="text-light">Upload Logo</Form.Label>
                            </label>
                                <label class="fileContainer">
                                <Form.Control onChange={this.props.uploadImage} 
                                type="file" class="fileButton" name="image" display="none" placeholder="Your Shop Logo"/>
                            </label>
                            </Form.Group>


                            <Form.Group controlId="form-group">
                                <Form.Label className ="text-light">Email address</Form.Label>
                                <Form.Control 
                                onChange={this.props.handleChange} 
                                type="email" 
                                name="email"
                                value={this.props.email} 
                                placeholder="Your Email" />
                            </Form.Group>

                            {/* <Form.Group controlId="formBasicPassword">
                                <Form.Label className ="text-light">Password</Form.Label>
                                <Form.Control onChange={this.props.handleChange} type="password" placeholder="Your Password" />
                            </Form.Group> */}
                            <Form.Group controlId="shopName">
                                <Form.Label className ="text-light">Shop Name</Form.Label>
                                <Form.Control 
                                onChange={this.props.handleChange} 
                                type="shopName" 
                                name="shopName"
                                value={this.props.shopName} 
                                placeholder="Your Shop Name" />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label className ="text-light">Shop Description</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows="5" 
                                onChange={this.props.handleChange} 
                                type="description"                                 name="description"
                                value={this.props.description} 
                                placeholder="Your Shop Description" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" onSubmit={this.props.formSubmit} onClick={this.props.formSubmit} >
                            Submit
                            </Button>

                        </Form>
                        </Col>
                    </Row>
                </Container>
            </>

        );
    }
}

export default ProfileInputForm;