import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import {default as ProfileInputForm} from "../components/ProfileInputForm";
import Nav from "../components/NavBarWithoutHamburger";
import LoginModal from "../components/Login"

class Login extends Component {
    render() {
        return(<>
        <Nav/>
        <LoginModal modalState={true}/>
    </>)
}
}

export default Login;
