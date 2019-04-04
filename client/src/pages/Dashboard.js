import React from "react";
import '../../node_modules/react-vis/dist/style.css';
import Nav from "../components/NavBar";
import SalesChart from "../components/Dashboard/SalesChart";
import StockChart from "../components/Dashboard/StockChart";
import {Col, Row } from 'react-bootstrap'

function Dashboard(){
    return(
        <>
        <Nav />
        <Row>
        <Col md={4}>
        <SalesChart /> 
        </Col>
       
        <Col md={4}>
        <StockChart />
        </Col>
        </Row>

        </>
    )
}

export default Dashboard;

