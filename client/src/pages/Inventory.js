import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/LayoutForInventory.js";
import Nav from "../components/NavBar";
import { Button } from 'react-bootstrap'
import ProductModal from '../components/ProductCardDetailed'
import axios from "axios";



class Inventory extends Component {
    state={
        productModal:false,
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

    openModaltHandler=(id, modalname)=>{
        
        // make ajax request to the backend and get the viewed product
        console.log("click")

        // set the this.state.product to be the viewed product
        // set show to true
       this.setState({
           [modalname]: true
       })
      
   }

   

   closeModalHandler=(modalname)=>{
       this.setState({
           [modalname]: false
       })
   }

    render() {
        return (<>
            <Nav shop={this.state.shop}/>
            <Jumbotron pageName="INVENTORY" instructions="Click to view and edit products and categories.">
                <Button variant="outline-dark" size="lg" onClick={(e)=>this.openModaltHandler(null, "productModal")}><i className="far fa-plus-square mr-2"></i> Add New Product</Button>
            </Jumbotron>
            <Layout />
            <ProductModal state={this.state.productModal} show={this.openModaltHandler} close={this.closeModalHandler}/>
        </>)
    }
}

export default Inventory;
