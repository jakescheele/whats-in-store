import React, { Component } from "react";
import '../../fileButton.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Button, Container, Form, Col } from "react-bootstrap";
import { relative } from "path";

class ProfileInputForm extends Component {
    state = {
        shop: {}
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    formSubmit = (event) => {
        event.preventDefault();
            console.log("passwords match")
            console.log(this.state)
            let body = {
                email: this.state.shop.email,
                password: this.state.shop.password,
                shopName: this.state.shop.shopName,
                shopLogo: this.state.shop.shopLogo,
                description: this.state.shop.description,
            }
            fetch("http://localhost:3000/auth/profile", {
                method: "POST",
                body: body
            }).then(res => {
                window.location.assign("/profile")
            })
    }

    render() {
        return (
            <>
                <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <Form.Group controlId="form-group">
                            <Form.Label className ="text-light">Email address</Form.Label>
                            <Form.Control onChange={this.handleChange} type="email" placeholder="Your Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className ="text-light">Password</Form.Label>
                            <Form.Control onChange={this.handleChange} type="password" placeholder="Your Password" />
                        </Form.Group>
                        <Form.Group controlId="shopName">
                            <Form.Label className ="text-light">Shop Name</Form.Label>
                            <Form.Control onChange={this.handleChange} type="shopName" placeholder="Your Shop Name" />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label className ="text-light">Shop Description</Form.Label>
                            <Form.Control as="textarea" rows="5" onChange={this.handleChange} type="description" placeholder="Your Shop Description" />
                        </Form.Group>
                        <Form.Group controlId="shopLogo">
                        <label class="border">
                            <Form.Label className ="text-light">Upload Logo</Form.Label>
                        </label>
                            <label class="fileContainer">
                            <Form.Control onChange={this.handleChange} 
                            type="file" class="fileButton" name="image" display="none" placeholder="Your Shop Logo"/>
                        </label>
                        </Form.Group>
                        <Button variant="primary" type="submit" onSubmit={this.formSubmit} onClick={this.formSubmit} >
                        Submit
                        </Button>

                    </Form>
                    </Col>
                </Container>
            </>

        );
    }
}

export default ProfileInputForm;