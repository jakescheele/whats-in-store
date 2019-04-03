import React, { Component } from "react";
import { default as LoginModal } from "../components/Login";
import { default as SignupModal } from "../components/Signup";
import { Button, Container, Row, Col, Figure } from "react-bootstrap";
import Nav from "../components/NavBarWithoutHamburger";


class LandingPage extends Component {
    state = {
        showLogin: false,
        showSignup: false
    }

    showModalSignup = (event) => {
        this.setState({
            showSignup: true
        })
    }

    closeModalSignup = (event) => {
        this.setState({
            showSignup: false
        })
    }
    showModalLogin = (event) => {
        this.setState({
            showLogin: true
        })
    }

    closeModalLogin = (event) => {
        this.setState({
            showLogin: false
        })
    }

    render() {
        return (
            <>
            <Nav>
                <Button variant="outline-light" className="mx-2 my-3 float-right" onClick={this.showModalLogin}>Login</Button>
                <Button variant="outline-light" className="mx-2 my-3 float-right" onClick={this.showModalSignup}>Signup</Button>
            </Nav>
            <div className="vertical-center">
                <Container className="text-light" r>
                    <Row>
                        <Col>
                            <div style={{"font-size":"55pt"}}>Manage Your Inventory Online</div>
                            <br></br>
                            <h2>Whether your business is big or small, or you'd just like to keep your stuff straight.</h2>
                            <br></br>
                            <Button size="lg" variant="outline-light" onClick={this.showModalSignup}>Get Started</Button>
                            <LoginModal modalState={this.state.showLogin} show={this.showModalLogin} close={this.closeModalLogin} />
                            <SignupModal modalState={this.state.showSignup} show={this.showModalSignup} close={this.closeModalSignup} />
                        </Col>
                    </Row>
                </Container>
            </div>
            </>)
    }
}

export default LandingPage;
