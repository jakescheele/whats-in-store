import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal'
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

class login extends React.Component{
    state={
        email:"",
        password:"",
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value}= event.target;
        this.setState({[name]:value});
    }
    formSubmit=()=>{
        if(this.state.Confirmpassword===this.state.password){
            let body={
                email:this.state.email,
                password: this.state.password
            }
            fetch("/auth/login",{
                method:"POST",
                body:body}).then(res=>{
                window.location.assign("/dashboard")
            })
        }
    }
render(){
    return(
        <>
        <Modal>
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
                    <Button variant="primary" type="submit" onSubmit={this.formSubmit} onClick={this.formSubmit} >
                        Submit
                        </Button>
                </Form>;
                </Container>
        </Modal>
    </>
        );
    }

}
export default login;