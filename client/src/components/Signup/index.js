import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container,Form, Modal } from "react-bootstrap";
import axios from "axios";
// import { on } from "cluster";
// import Overlay from "react-bootstrap";
class SignupModal extends Component {
    state = {
        email: "",
        password: "",
        Confirmpassword: "",
        shopName: "",
        description: "",
        validate: true,
        showOverlay: false,
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.setState({ showOverlay: false });
        let pass=this.state.password;
        if (this.state.Confirmpassword === pass&&/[a-z]/gi.test(pass)&&
        /[!@#$%^&*()<>.,/]/g.test(pass)&&/[0-9]/gi.test(pass)&&pass.length>=6&&/@/g.test(this.state.email)&&
        /.com/g.test(this.state.email)){
            console.log("passwords match")
            console.log(this.state)
            axios.post("/auth/signup",this.state).then(res=>{
                if(res.data==="Email already taken"){
                    console.log(res.data)
                    this.setState({ showOverlay: true })
                }
                else{
                    this.setState({ showOverlay: false })
                    axios.post("/auth/login",{email:this.state.email,password:this.state.password})
                    .then(res=>{
                        console.log(res.data)
                        this.props.loginStateHandler(res.data)
                        window.location.assign("/dashboard")
                    })
                }
            })
        }
        else {
            console.log("check password and email format, or passwords dont match")
            this.setState({ showOverlay: true })
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



                            <Button variant="primary" type="submit" onSubmit={this.formSubmit} 
                            onClick={this.formSubmit} >
                                Submit
                            </Button>





                            
        {/* <Overlay password={this.state.password} showOverlay={this.state.showOverlay} placement="right">
          {({ placement, scheduleUpdate, arrowProps, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              check password and email format, or passwords don't match
            </div>
          )}
        </Overlay> */}

                        </Form>
                        </Container>
                    </Modal.Body>
                </Modal>
            </>

        );
    }
}


export default SignupModal;