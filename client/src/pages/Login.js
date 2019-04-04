import React, { Component } from "react";
import Nav from "../components/NavBarWithoutHamburger";
import LoginModal from "../components/Login"
import { Button} from "react-bootstrap";


class Login extends Component {
    render() {
        return(<>
        <Nav>
            <Button variant="outline-light" className="mx-2 my-3 float-right" onClick={(e)=>this.showModal("LoginModal")}>Login</Button>
            <Button variant="outline-light" className="mx-2 my-3 float-right" onClick={(e)=>this.showModal("SignupModal")}>Signup</Button>
        </Nav>
        <LoginModal modalState={true}/>
    </>)
}
}

export default Login;
