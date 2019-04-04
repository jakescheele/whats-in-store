import React from "react";
import '../../node_modules/react-vis/dist/style.css';
import Nav from "../components/NavBar";
import SalesChart from "../components/Dashboard/SalesChart";
import StockChart from "../components/Dashboard/StockChart";
import {Col, Row, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Dashboard(){
    return(
        <>
        <Nav />
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

        </>
    )
}

export default Dashboard;

