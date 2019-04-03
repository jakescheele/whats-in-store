import React, { Component } from "react";
import {default as LoginModal} from "../components/Login";
import {default as SignupModal} from "../components/Signup";
import { Button } from "react-bootstrap";


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
                <Button onClick={this.showModalLogin}>Login</Button>
                <Button onClick={this.showModalSignup}>Signup</Button>
                <LoginModal modalState={this.state.showLogin} show={this.showModalLogin} close={this.closeModalLogin}/>
                <SignupModal modalState={this.state.showSignup} show={this.showModalSignup} close={this.closeModalSignup}/>
            </>)
    }
}

export default LandingPage;
