import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import {default as ProfileInputForm} from "../components/ProfileInputForm";
import Nav from "../components/NavBar";
import axios from "axios";
import SalesModal from "../components/Dashboard/LineChart/salesModal"


class Profile extends Component {

    state={
        login: false,
        shop:{},
    }

    

    componentDidMount(){
        axios.get("/auth/test")
        .then(res=>{
            console.log(res.data)
            if(res.data==="no user"){
                console.log("no user log in")
                window.location.assign("/")
            }else{
                console.log("user logged in")
                this.setState({
                    login: true,
                    shop: res.data
                })
            }
        })
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    formSubmit = (event) => {
        event.preventDefault();
            console.log("passwords match")
            console.log(this.state)
            let body = {
                email: this.state.shop.email,
                password: this.state.shop.password,
                shopName: this.state.shop.shopName,
                shopLogo: this.state.shop.shopLogo,
                description: this.state.shop.description,
            }
            // Create a put request instead of a post request, the submit button should update the user information
            fetch("http://localhost:3000/auth/profile", {
                method: "POST",
                body: body
            }).then(res => {
                window.location.assign("/profile")
            })
    }

    render() {
    return(<>
        <Nav shop={this.state.shop}/>
        <Jumbotron 
        pageName="PROFILE" 
        instructions="Edit basic information of the shop."
        />
        <ProfileInputForm shop={this.state.shop}/>
    </>)
}
}

export default Profile;
