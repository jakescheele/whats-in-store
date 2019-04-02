
import React, { Component } from "react";
import {Container, Col, Row, Card, Form} from 'react-bootstrap'
import CategorySideBar from "../CategorySideBar"
import ProductCard from "../ProductCard"
import ProductModal from "../ProductCardDetailed";
import SearchBar from "../SearchBar"
import SortingBar from "../SortingBar"
import BackToTopBtn from "../BackToTopBtn"
import Footer from "../Footer"

// dummy data
import products from "../../DummyProducts.json"

class Layout extends Component {
    state={
        products: products
    }

    componentDidMount(){
        //axio request to find all products in DB


        // set state
    }

    // click handler for product card to trigger product detail modal

    render(){
        return (<>
        <Container>
            <Row>
            <ProductModal/>
                <Col sm={12} md={10} lg={10} className="px-2"><SearchBar/></Col>
                <Col sm={12} md={2} lg={2} className="px-2"><SortingBar/></Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={2} lg={2} className="mx-1 px-1 pb-2">
                    <CategorySideBar/>
                </Col>
                <Col className="mx-1">
                    <Row>
                        {this.state.products.map(product=>(<ProductCard product={product}/>))}
                    </Row>
                </Col>

            </Row>
            <BackToTopBtn/>
        </Container>
        <Footer/>
        </>)
    }
}
                        
                        
export default Layout;
