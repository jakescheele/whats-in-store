import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { default as ProfileInputForm } from "../components/ProfileInputForm";
import Nav from "../components/NavBar";
import axios from "axios";

const emptyLogo = {
    logo: {
        logo_url: "",
        logo_id: ""
    }
}

class Profile extends Component {

    state = {
        login: false,
        shop:{},
        email:"",
        shopName: "",
        description: "",
        logo: {
            logo_url: "",
            logo_id: ""
        },
        password: ""
    }

    componentDidMount() {
        axios.get("/auth/test")
            .then(res => {
                console.log(res.data)
                if (res.data === "no user") {
                    console.log("Not logged in!")
                    window.location.assign("/")
                }
                else {
                    if (res.data.logo) {
                        this.setState({
                            login: true,
                            shop: res.data,
                            email: res.data.email,
                            shopName: res.data.shopName,
                            description: res.data.description,
                            logo: {...res.data.logo},
                        })
                    } else {
                        this.setState({
                            login: true,
                            shop: res.data,
                            email: res.data.email,
                            shopName: res.data.shopName,
                            description: res.data.description,
                            logo: { ...emptyLogo }
                        })
                    }


                }
            })
    }

    handleChange = (event) => {
        event.preventDefault();
        
        const { name, value } = event.target;
        console.log(name)
        console.log(value)
        this.setState({ [name]: value });
    }


    // image upload 
    uploadImage = (event) => {
        const files = Array.from(event.target.files)
        const formData = new FormData()
        files.forEach((file, i) => {
            formData.append(i, file)
        })

        axios.post('/api/products/uploadImage', formData,
            { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(images => {

                let newImage = {
                    logo_url: images.data[0].secure_url,
                    logo_id: images.data[0].public_id
                }

                console.log(newImage)

                this.setState({
                    logo: { ...newImage } 
                })

                console.log(this.state.shop)
            })
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log("passwords match")
        console.log(this.state)
        let body = {
            email: this.state.email,
            shopName: this.state.shopName,
            logo: this.state.logo,
            description: this.state.description,
        }

        axios.put("/api/users/update", body)
            .then(res => {
                console.log(res)
                alert("Changes Saved!")
            })
            .catch(err => {
                console.log(err)
                alert("Oops! Something wrong! Try it again!")
            });

    }

    render() {
        return (<>
            <Nav shop={this.state.shop} />
            <Jumbotron
                pageName="PROFILE"
                instructions="Edit basic information of the shop." />
            <ProfileInputForm
                uploadImage={this.uploadImage}
                formSubmit={this.formSubmit}
                handleChange={this.handleChange} 
                // shop info
                email= {this.state.email}
                shopName= {this.state.shopName}
                logo= {this.state.logo}
                description= {this.state.description}
            />
        </>)
    }
}

export default Profile;
