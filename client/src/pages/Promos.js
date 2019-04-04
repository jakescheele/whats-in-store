import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/NavBar";
import Table from "../components/PromosManagement/FlashSale/ProductCardForFlashSale";
import axios from "axios";

class Promos extends Component{
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
                window.location.assign("/login")
            }else{
                console.log("user logged in")
                this.setState({
                    login: true,
                    shop: res.data
                })
            }
        })
    }

    render(){
        return(<>
            <Nav shop={this.state.shop}/>
            <Jumbotron pageName="PROMOTIONALS" instructions="Edit your promotion settings."/>
            <Table/>
        </>)
    }
}

export default Promos;
