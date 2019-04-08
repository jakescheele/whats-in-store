import React, { Component } from "react";
import {Container, Col, Row, Card} from 'react-bootstrap'
import CategorySideBar from "../CategorySideBar"
import ProductCard from "../ProductCard"
import SearchBar from "../SearchBar"
import SortingBar from "../SortingBar"
import BackToTopBtn from "../BackToTopBtn"
import CategoriesModal from "../CategoriesModal"


// Utils

class Layout extends Component {
    

    render() {
        return (
        <>
        <Container>
            <Row>
                <Col sm={12} md={10} lg={10} className="rem-0.125"><SearchBar/></Col>
                <Col sm={12} md={2} lg={2} className="rem-0.125">
                    <SortingBar 
                    handleSorting={this.props.handleSorting}
                    sorting={this.props.sorting}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={3} lg={3} className="rem-0.0625 pb-2">
                    <CategorySideBar 
                        categories={this.props.categories} 
                        show={this.props.show}
                        handleCheckBox={this.props.handleCheckBox}
                        filters={this.props.filters}
                    />
                </Col>
                <Col>
                    <Row>
                        {this.props.products.length===0?(<Card className="py-4 px-3" style={{"width":"100%"}}>No product in the inventory now.</Card>):(this.props.products.map(product=>(<ProductCard key={product._id} catName={product._id} product={product} show={this.props.show} />)))}
                    </Row>
                </Col>

            </Row>
            <BackToTopBtn/>
        </Container>
        <CategoriesModal state={this.props.categoriesModal} submitForm={this.submitForm} handleChange={this.handleChange}
          show={this.openModaltHandler} close={this.closeModalHandler} categories={this.props.categories}/>
        </>)
    }
}
                        
                        
export default Layout;
