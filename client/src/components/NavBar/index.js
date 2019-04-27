
import React, { Component } from "react";
import Hamburger from "./Hamburger";
import BrandLogo from "../BrandLogo"
import axios from "axios";



class Nav extends Component {
    state={
        collapse: true
    }

    logoutHandler=(e)=>{
        e.preventDefault()
        axios.get("/auth/logout")
        .then(res=>{
            if(res.data.success==="Yes"){
                alert("You log out successfully!")
                window.location.assign("/")
            }else{
                alert("Something went wrong!")
            }
        })

    }

    hamburgerHandler = (e)=>{
        // e.preventDefault()
        this.setState({
            collapse: !this.state.collapse
        })
        console.log(this.state.collapse)
    }
    
    render(){
        return this.state.collapse?(
        <>
            <nav>
                <BrandLogo shop={this.props.shop}/>
                <div id="toggle" onClick={this.hamburgerHandler}>
                    <div className="span" id="one"></div>
                    <div className="span" id="two"></div>
                    <div className="span" id="three"></div>
                </div>
            </nav>
        </>):
        (<>
            <nav>
                <BrandLogo shop={this.props.shop}/>
                <div id="toggle" className="on" onClick={this.hamburgerHandler}>
                    <div className="span" id="one"></div>
                    <div className="span" id="two"></div>
                    <div className="span" id="three"></div>
                </div>
            </nav>
            <Hamburger collapse={this.hamburgerHandler} logout={this.logoutHandler}/>
        </>)
    }
}





export default Nav;
