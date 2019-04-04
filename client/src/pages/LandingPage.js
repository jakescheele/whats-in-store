import React, { Component } from "react";
import { default as LoginModal } from "../components/Login";
import { default as SignupModal } from "../components/Signup";
import { Button, Container, Row, Col, Figure } from "react-bootstrap";
import Nav from "../components/NavBarWithoutHamburger";


class LandingPage extends Component {
    
    state = {
        LoginModal: false,
        SignupModal: false
    }

    showModal= (modalName) => {
        this.setState({
            [modalName]: true
        })
    }

    closeModal = (modalName) => {
        this.setState({
            [modalName]: false
        })
    }
   

    render() {
        return (
            <>
                <Nav>
                    <Button variant="outline-light" className="mx-2 my-3 float-right" onClick={(e)=>this.showModal("LoginModal")}>Login</Button>
                    <Button variant="outline-light" className="mx-2 my-3 float-right" onClick={(e)=>this.showModal("SignupModal")}>Signup</Button>
                </Nav>
                <div className="vertical-center">
                    <Container className="text-light">
                        <Row>
                            <Col>
                                <div style={{ "fontSize": "55pt" }}>Manage Your Inventory Online</div>
                                <br></br>
                                <h2>Whether your business is big or small, or you'd just like to keep your stuff straight.</h2>
                                <br></br>
                                <Button size="lg" variant="outline-light" onClick={(e)=>this.showModal("SignupModal")}>Get Started</Button>
                                <LoginModal modalState={this.state.LoginModal} show={this.showModal} close={this.closeModal} />
                                <SignupModal modalState={this.state.SignupModal} show={this.showModal} close={this.closeModal} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>)
    }
}

export default LandingPage;
