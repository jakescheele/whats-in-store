import React, {Component} from "react";

import Nav from "../components/NavBar";

import axios from "axios";
import SalesChart from "../components/Dashboard/SalesChart";
import StockChart from "../components/Dashboard/StockChart";
import {Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";





class Dashboard extends Component{
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
        <Row>
        <Col md={6}>
        <SalesChart /> 
        <li className="chartButton">
                    <Link 
                        to="/inventory"
                        className={
                            window.location.pathname === "/inventory"
                            ? "nav-link active"
                            : "nav-link"
                        }
                    >See All Stock</Link>     
        </li>
        
        </Col>
       
        <Col md={6}>
        <StockChart />
        <li class="chartButton">
                    <Link 
                        to="/profile"
                        className={
                            window.location.pathname === "/profile"
                            ? "nav-link active"
                            : "nav-link"
                        }
                    >See Sales Records</Link>     
        </li>
        
        </Col>
        </Row>
    </>)}
}

export default Dashboard;
