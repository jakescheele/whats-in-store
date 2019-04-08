import React, { Component } from "react";
import { default as LoginModal } from "../components/Login";
import { default as SignupModal } from "../components/Signup";
import { Button, Container, Row, Col } from "react-bootstrap";
import Nav from "../components/NavBarWithoutHamburger";
import StoreAnimation from "../components/LandingPage/StoreAnimation";
import '../index.css';


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
                
                
           
                    <Container className="text-light">
                        <Row>
                        <Col md={6}>
                                {/* <img className="landingPageLogo" src={process.env.PUBLIC_URL + '/logo.png'} /> */}
                                <div className="modalHeaderWhite">Manage Your Inventory Online</div>
                                <br></br>
                                <div className="instructionsWhite">Whether your business is big or small, or you'd just like to keep your stuff straight.</div>
                                <br></br>
                                <Button size="lg" variant="outline-light" onClick={(e)=>this.showModal("SignupModal")}>Get Started</Button>
                                <LoginModal modalState={this.state.LoginModal} show={this.showModal} close={this.closeModal} loginStateHandler={this.props.login}/>
                                <SignupModal modalState={this.state.SignupModal} show={this.showModal} close={this.closeModal} loginStateHandler={this.props.login}/>
                               
                            
                            </Col>
                        <Col md={6}>
                         <StoreAnimation />
                        </Col>
                        </Row>
                    </Container>
               
          
                
                
            </>)
    }
}

export default LandingPage;
