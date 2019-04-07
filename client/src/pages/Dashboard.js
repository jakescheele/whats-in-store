import React, { Component } from "react";
import Nav from "../components/NavBar";
import '../index.css'
import axios from "axios";
import BarChart from "../components/Dashboard/BarChart"
import LineSeries from "../components/Dashboard/LineChart";
import { Col, Row, Container, Button } from 'react-bootstrap'
import ProductAPI from "../utils/API/products"
import Jumbotron from "../components/Jumbotron"
import SalesModal from "../components/Dashboard/LineChart/salesModal"
import '../index.css';

// Utils
import CategoryAPI from "../utils/API/categories"


class Dashboard extends Component {
    state = {
        login: false,
        shop: {},
        categoryStockData: [],
        SalesModal: false,

        
    }

    componentDidMount() {
        axios.get("/auth/test")
            .then(res => {
                console.log(res.data)
                if (res.data === "no user") {
                    console.log("no user log in")
                    window.location.assign("/")
                } else {
                    console.log("user logged in")
                    this.setState({
                        login: true,
                        shop: res.data
                    })
                }
            })
        
        // make an axios to get all category obj
        CategoryAPI.getCategories()
            .then(res=>{
                console.log(res.data)
                console.log("====here is inside the mount=====")
                for(let i in res.data){
                    this.getProductByCategory(res.data[i].name, res.data[i]._id)
                }
        })

    }

    getProductByCategory=(catName, id)=>{
        let productArr=[]
        console.log("Looking for products with category id:")
        console.log(id)
        console.log(catName)
        ProductAPI.getProducts()
        .then(res=>{
            console.log(res)
            productArr = res.data.filter(product=>product.category===id)
            console.log(productArr)

            // do the math to add up stock
            let stockOfCategory = 0
            for(let i in productArr){
                stockOfCategory += productArr[i].totalStock
            }
            console.log(stockOfCategory)
            let xyObj = {
                x: catName, y: stockOfCategory
            }
            this.setState({
                categoryStockData: [...this.state.categoryStockData, {...xyObj}]
            })
            console.log(this.state.categoryStockData)
        })       
    }

    redirect=(e)=>{
        const {name} = e.target
        window.location.assign(name)
    }

    showModal= (modalName) => {
        this.setState({
            [modalName]: true
        })
    }

    closeModal = (modalName) => {
        this.setState({
            [modalName]: false
        })
    }

    render() {
        return (<>
            <Nav shop={this.state.shop} />
            <div class="modalHeader">
            <Jumbotron pageName="DASHBOARD" instructions="Keep tabs on your stocks, stats and stuff."/>
            </div>
            <Container className="mt-5">
            <Row className="justify-content-around align-items-start text-center">
                <Col sm={12} md={4} lg={4} className="text-center">
                    <BarChart data={this.state.categoryStockData}/>
                    <Button 
                        className="mt-5"
                        name="/inventory" 
                        size="lg" 
                        variant="outline-light" 
                        onClick={this.redirect}
                        block
                    >
                        View/Edit Stock
                    </Button>
                </Col>

                <Col sm={12} md={4} lg={4} className="text-center">
                    <LineSeries/>
                    
                    <Button  
                        className="mt-5"
                        name="#" 
                        size="lg" 
                        variant="outline-light"
                        onClick={(e) => this.showModal("SalesModal")}
                        block
                    >
                        See Sales Records
                    </Button>
                
                    
                </Col>
            </Row>
            </Container>
            {/* modal /this.state.salemodal */}
            <SalesModal 
            state= {this.state.SalesModal}
            show={this.showModal}
            close= {this.closeModal}
            
            />
        </>)
    }
}

export default Dashboard;
