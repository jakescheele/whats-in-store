import React, { Component } from "react";
import Nav from "../components/NavBarWithoutHamburger";
import LoginModal from "../components/Login"
import { Button, Card, Form, Container } from "react-bootstrap";
import axios from "axios";



class Login extends Component {

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    formSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios.post("/auth/login",this.state)
        .then(res=>{
            console.log(res)
            if(res.data==='Server Error'){
                console.log("wrong input")
            }
            else{
                console.log("login successful")
                window.location.assign("/dashboard")
            }
        })
    }
    render() {
        return (<>
            <Nav>
                <Button variant="outline-light" className="mx-2 my-3 float-right" onClick={(e) => this.showModal("LoginModal")}>Login</Button>
                <Button variant="outline-light" className="mx-2 my-3 float-right" onClick={(e) => this.showModal("SignupModal")}>Signup</Button>
            </Nav>
            <Container>
                <Card className="mt-5 mx-5 py-2 px-3">
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
                </Card>
            </Container>
        </>)
    }
}

export default Login;
