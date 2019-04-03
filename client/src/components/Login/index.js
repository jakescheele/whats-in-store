import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container,Form, Modal } from "react-bootstrap";

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
        if(this.state.password===this.state.password){
            let body={
                email:this.state.email,
                password: this.state.password
            }
            console.log(body)
            fetch("/auth/login",{
                method:"POST",
                body:JSON.stringify(body),
                credentials: "same-origin",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                }}).then(res=>{
                console.log(res)
                // window.location.assign("/dashboard")
            })
            
        }
    }
    render(){
        return(
        <>
        <Modal show={this.props.modalState} onHide={this.props.close}>
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
        </Modal>
    </>
        );
    }

}
export default LoginModal;