import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Form, Modal } from "react-bootstrap";
import axios from "axios";
// import { on } from "cluster";

class SignupModal extends Component {
    state = {
        email: "",
        password: "",
        Confirmpassword: "",
        shopName: "",
        description: "",
        validated: false,
        errorMessage: ""
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log("signing up!!!")
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            
            event.stopPropagation();
        }
        this.setState({ validated: true });

        let pass = this.state.password;
        if (this.state.Confirmpassword === pass
            && /[a-z]/gi.test(pass)
            && /[!@#$%^&*()<>.,/]/g.test(pass)
            && /[0-9]/gi.test(pass)
            && pass.length >= 6
            && /@/g.test(this.state.email)
            && /.com/g.test(this.state.email)) {
            console.log("passwords match")
            console.log(this.state)

            axios.post("/auth/signup", this.state).then(res => {
                if (res.data === "Email already taken") {
                    console.log(res.data)
                    this.setState({
                        errorMessage: "Email has already been taken.",
                    })
                }
                else {
                    axios.post("/auth/login",
                        {
                            email: this.state.email,
                            password: this.state.password
                        })
                        .then(res => {
                            console.log(res.data)
                            window.location.assign("/dashboard")
                        })
                }
            })
        }
        else {
            console.log("check password and email format, or passwords dont match")
            this.setState({
                errorMessage: "Please check your password and email format.",
            })
        }
    }

    render() {
        const { validated } = this.state;

        return (
            <>
                <Modal show={this.props.modalState} onHide={(e) => this.props.close("SignupModal")}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Sign Up
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-3">
                        <Container>
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={e => this.formSubmit(e)}
                            >
                                <Form.Group controlId="form-group">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                    onChange={this.handleChange} 
                                    name="email" 
                                    type="email" 
                                    placeholder="Enter email" 
                                    required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a email.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    onChange={this.handleChange} 
                                    name="password" 
                                    type="password" 
                                    placeholder="Password"
                                    required 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a password.
                                    </Form.Control.Feedback>
                                    <Form.Text className="text-muted">
                                        Passwords must be at least six characters, including a number and special character.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="confirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control 
                                    onChange={this.handleChange} 
                                    name="Confirmpassword" 
                                    type="Password" 
                                    placeholder="Confirm Password" 
                                    required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please re-enter your password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="shopName">
                                    <Form.Label>Shop Name</Form.Label>
                                    <Form.Control 
                                    onChange={this.handleChange} 
                                    name="shopName" 
                                    type="text" 
                                    placeholder="Shop Name" 
                                    required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a shop name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="description">
                                    <Form.Label>Shop Description</Form.Label>
                                    <Form.Control 
                                    as="textarea" 
                                    rows="3" 
                                    onChange={this.handleChange} 
                                    name="description" 
                                    placeholder="Shop Description" 
                                    required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a shop description.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <p className="text-danger">
                                    {this.state.errorMessage}
                                </p>
                                <Button variant="primary" type="submit" onClick={this.formSubmit} >
                                    Submit
                            </Button>
                            </Form>
                        </Container>
                    </Modal.Body>
                </Modal>
            </>

        );
    }
}



export default SignupModal;