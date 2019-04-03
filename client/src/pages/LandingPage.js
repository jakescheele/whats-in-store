import React, { Component } from "react";
import {default as LoginModal} from "../components/Login";
import {default as SignupModal} from "../components/Signup";
import { Button, Container, Row, Col, Figure } from "react-bootstrap";


class LandingPage extends Component {
    state={
        showLogin: false,
        showSignup: false
    }

    showModalSignup = (event)=>{
        this.setState({
            showSignup: true
        })
    }

    closeModalSignup = (event)=>{
        this.setState({
            showSignup: false
        })
    }
    showModalLogin = (event)=>{
        this.setState({
            showLogin: true
        })
    }

    closeModalLogin = (event)=>{
        this.setState({
            showLogin: false
        })
    }

    render() {
        return (
            <>
            <Container>
                <Row>
                <Col md={{ span: 4, offset: 6 }}></Col>
                <Button onClick={this.showModalLogin}>Login</Button>
                <Button onClick={this.showModalSignup}>Signup</Button>
                </Row>
                <Col md={{ span: 6, offset: 2 }}>
                <h1>Manage Your Inventory Online</h1>
                <br></br>
                <h2>Whether your business is big or small, or you'd just like to keep your stuff straight</h2>
                <br></br>
                <Button onClick={this.showModalSignup}>Get Started</Button>
                <LoginModal modalState={this.state.showLogin} show={this.showModalLogin} close={this.closeModalLogin}/>
                <SignupModal modalState={this.state.showSignup} show={this.showModalSignup} close={this.closeModalSignup}/>
                </Col>
                <br></br>
                <Col md={{ span: 2, offset: 9 }}>
                <Figure>
                     <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="holder.js/171x180"
                 />
                </Figure>
                </Col>
                </Container>
            </>)
    }
}

export default LandingPage;
