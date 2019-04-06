import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/NavBar";
import PromoTable from "../components/PromosManagement/FlashSale/ProductCardForFlashSale";
import axios from "axios";
import ProductAPI from "../utils/API/products"

class Promos extends Component{
    state={
        login: false,
        shop:{},
        saleProducts:[]
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

        ProductAPI.getProducts()
        .then(res=>{
            let productArr=[]
            productArr = res.data.filter(product=>product.flashSales.checked===true)
            // set state
            this.setState({
                saleProducts: [...productArr]
            })
            console.log(this.state.saleProducts)
            
        })       


    }

    render(){
        return(<>
            <Nav shop={this.state.shop}/>
            <Jumbotron pageName="PROMOTIONS" instructions="Edit your promotion settings."/>
            <PromoTable saleProducts={this.state.saleProducts}/>
        </>)
    }
}

export default Promos;
