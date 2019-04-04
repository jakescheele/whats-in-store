import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container,Form, Modal } from "react-bootstrap";
import axios from "axios";
class LoginModal extends Component{
    state={
        email:"",
        password:"",
    }
    handleChange=(event)=>{
        event.preventDefault();
        const { name, value }= event.target;
        this.setState({ [name]: value });
    }
    formSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state)
        axios.post("/auth/login",this.state)
        .then(res=>{
            console.log("log the user in!")
            window.location.assign("/dashboard")
        })
    }
    render(){
        return(
        <>
        <Modal show={this.props.modalState} onHide={(e)=>this.props.close("LoginModal")}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Log In
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
export default LoginModal;