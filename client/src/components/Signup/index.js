import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal'
import { Button, Container } from "react-bootstrap";
import axios from "axios";
class Signup extends React.Component {
    state = {
        email: "",
        shopName: "",
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
            fetch("/auth/signup",{
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
        else {
            console.log("check password")
        }
    }

    render() {
        return (
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



// React.render(<App />, document.body);
export default Signup;
