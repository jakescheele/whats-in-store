import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container,Form, Modal } from "react-bootstrap";
import axios from "axios";
class SignupModal extends Component {
    state = {
        email: "",
        password: "",
        Confirmpassword: "",
        shopName: "",
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
            axios.post("/auth/signup",this.state).then(res=>{
                if(res.data==="Email already taken"){
                    console.log(res.data)
                }
                else{
                    axios.post("/auth/login",{email:this.state.email,password:this.state.password})
                    .then(res=>{
                        console.log(res)
                        window.location.assign("/dashboard")
                    })
                }
            })
        }
        else {
            console.log("check password")
        }
    }

    render() {
        return (
            <>
                <Modal show={this.props.modalState} onHide={(e)=>this.props.close("SignupModal")}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Sign Up
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-3">
                    <Container>
                        <Form>
                            <Form.Group controlId="form-group">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="confirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control onChange={this.handleChange} name="Confirmpassword" type="Password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Form.Group controlId="shopName">
                                <Form.Label>Shop Name</Form.Label>
                                <Form.Control onChange={this.handleChange} name="shopName" type="text" placeholder="Shop Name" />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Shop Description</Form.Label>
                                <Form.Control as="textarea" rows="3" onChange={this.handleChange} name="description" placeholder="Shop Description" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onSubmit={this.formSubmit} onClick={this.formSubmit} >
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
