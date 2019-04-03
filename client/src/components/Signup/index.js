import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container,Form, Modal } from "react-bootstrap";

class SignupModal extends Component {
    state = {
        email: "",
        password: "",
        Confirmpassword: "",
        shopLogo: "",
        description: ""
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    formSubmit = (event) => {
        event.preventDefault();
        if (this.state.Confirmpassword === this.state.password) {
            console.log("passowrds match")
            console.log(this.state)
            let body = {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                shopName: this.state.shopName,
                description: this.state.description,
            }
            fetch("http://localhost:3000/auth/signup", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(body),
                credentials: "same-origin",
                headers: {
                    'Accept': 'application/x-www-form-urlencoded',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(res => {
                console.log(res)
                // window.location.assign("/dashboard")
                this.props.close()
            })
        }
        else {
            console.log("check password")
        }
    }

    render() {
        return (
            <>
                <Modal show={this.props.modalState} onHide={this.props.close}>
                    <Container>
                        <Form>
                            <Form.Group controlId="form-group">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleChange} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="confirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control onChange={this.handleChange} type="confirmPassword" placeholder="Confirm Password" />
                            </Form.Group>
                            <Form.Group controlId="shopName">
                                <Form.Label>Shop Name</Form.Label>
                                <Form.Control onChange={this.handleChange} type="shopName" placeholder="Shop Name" />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Shop Description</Form.Label>
                                <Form.Control onChange={this.handleChange} type="description" placeholder="Shop Description" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onSubmit={this.formSubmit} onClick={this.formSubmit} >
                                Submit
                                </Button>
                        </Form>
                        </Container>
                </Modal>
            </>

        );
    }
}



export default SignupModal;