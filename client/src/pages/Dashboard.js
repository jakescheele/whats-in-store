import React, {Component} from "react";
import Nav from "../components/NavBar";
import axios from "axios";
import SalesChart from "../components/Dashboard/SalesChart";
import StockChart from "../components/Dashboard/StockChart";
import {Col, Row, Button } from 'react-bootstrap'
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
        <div>Here is Dashboard</div>
        <Row>
        <Col md={6}>
        <Button size="sm" variant="success">
        <li>
                    <Link 
                        to="/inventory"
                        className={
                            window.location.pathname === "/inventory"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        

                    >INVENTORY</Link>     
                </li>
                </Button>
        <SalesChart /> 
        </Col>
       
        <Col md={6}>
        <StockChart />
        </Col>
        </Row>
    </>)}
}

export default Dashboard;
