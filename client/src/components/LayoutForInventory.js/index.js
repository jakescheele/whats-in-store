import React, { Component } from "react";
import {Container, Col, Row, Card} from 'react-bootstrap'
import CategorySideBar from "../CategorySideBar"
import ProductCard from "../ProductCard"
import SearchBar from "../SearchBar"
import SortingBar from "../SortingBar"
import BackToTopBtn from "../BackToTopBtn"
import CategoryModal from "../ViewCategoriesModal"
import Axios from "axios";


// Utils




class Layout extends Component {
    state={
        productModal: false,
        categoryModal: false,
        product: {},
    }

    submitForm=(event)=>{
        event.preventDefault();
        Axios.post("/api/categories",{name:this.state.cata})
        .then(res=>{
        this.setState({categories:[...this.state.categories,res.data]})
        })
    }
    
    handleChange = (event) => {
        event.preventDefault();
        const {name,value}= event.target
        this.setState({[name]:value });
        console.log(this.state.cata)
    }

    // click handler for product card to trigger product detail modal
    openModaltHandler=(id, modalname)=>{
        
         // make ajax request to the backend and get the viewed product
         console.log(id)

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
        return (
        <>
         




        <Container>
            <Row>
                <Col sm={12} md={10} lg={10} className="rem-0.125"><SearchBar/></Col>
                <Col sm={12} md={2} lg={2} className="rem-0.125"><SortingBar/></Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={3} lg={3} className="rem-0.0625 pb-2">
                    <CategorySideBar categories={this.props.categories} show={this.openModaltHandler}/>
                </Col>
                <Col>
                    <Row>
                        {this.props.products.length===0?(<Card className="py-4 px-3" style={{"width":"100%"}}>No product in the inventory now.</Card>):(this.props.products.map(product=>(<ProductCard key={product._id} product={product} show={this.props.show} />)))}
                    </Row>
                </Col>

            </Row>
            <BackToTopBtn/>
        </Container>
        <CategoryModal state={this.state.categoryModal} submitForm={this.submitForm} handleChange={this.handleChange}
          show={this.openModaltHandler} close={this.closeModalHandler} categories={this.props.categories}/>
        </>)
    }
}
                        
                        
export default Layout;
