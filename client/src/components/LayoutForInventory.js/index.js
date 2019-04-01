
import React, { Component } from "react";
import {Container, Col, Row, Card, Form} from 'react-bootstrap'
import CategorySideBar from "../CategorySideBar"
import ProductCard from "../ProductCard"


function Layout() {
    return (<Container>
        <Row>
            <Col xs={12} sm={3} className="mx-1 px-1 pb-2">
                <CategorySideBar/>
            </Col>
            <Col className="mx-1">
                <Row>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </Row>
            </Col>

        </Row>
    </Container>)
}
                        
                        
export default Layout;
