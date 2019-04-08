import React, { Component } from "react";
import { default as LoginModal } from "../components/Login";
import { default as SignupModal } from "../components/Signup";
import { Button, Container, Row, Col } from "react-bootstrap";
import Nav from "../components/NavBarWithoutHamburger";
import StoreAnimation from "../components/LandingPage/StoreAnimation";
import '../index.css';


class LandingPage extends Component {
    
    state = {
        shop:"",
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
                        <Row className="d-flex justify-content-around mt-5" >
                        <Col sm={12} md={5} lg={5}  className="align-self-center">
                                <div className="landingTile">Manage Your Inventory Online</div>
                                <br></br>
                                <div className="landingSubtitle">Whether your business is big or small, or you'd just like to keep your stuff straight.</div>
                                <br></br>
                                <Button size="lg" variant="outline-light" onClick={(e)=>this.showModal("SignupModal")}>Get Started</Button>
                                <LoginModal modalState={this.state.LoginModal} show={this.showModal} close={this.closeModal} loginStateHandler={this.props.login}/>
                                <SignupModal modalState={this.state.SignupModal} show={this.showModal} close={this.closeModal} loginStateHandler={this.props.login}/>
                            </Col>
                            
                        <Col sm={12} md={5} lg={5} className="align-self-center">
                         <StoreAnimation style={{ "margin":"0px 0.5rem 0px 0.5rem","padding":"0px"}}/>

                        </Col>
                        </Row>
                    </Container>
               
          
                
                
            </>)
    }
}

export default LandingPage;
