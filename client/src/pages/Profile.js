import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import {default as ProfileInputForm} from "../components/ProfileInputForm";
import Nav from "../components/NavBar";

class Profile extends Component {
    render() {
    return(<>
    <Nav/>
    <Jumbotron pageName="PROFILE" instructions="Edit basic information of the shop."/>
    <ProfileInputForm/>
    </>)
}
}

export default Profile;
