
import React, { Component } from "react";
import {Container, Col, Row, Card} from 'react-bootstrap'
import CategorySideBar from "../CategorySideBar"
import ProductCard from "../ProductCard"
import SearchBar from "../SearchBar"
import SortingBar from "../SortingBar"
import BackToTopBtn from "../BackToTopBtn"
import ProductModal from "../ProductCardDetailed";
import CategoryModal from "../ViewCategoriesModal"
import Footer from "../Footer"

// Utils
import ProductAPI from "../../utils/API/products"

// dummy data
import products from "../../DummyProducts.json"
import categories from "../../DummyCategories.json"

class Layout extends Component {
    state={
        products: [],
        categories: categories,
        productModal: false,
        categoryModal: false,
        product: {}
    }

    componentDidMount(){
        //axio request to find all products in DB
        ProductAPI.getProducts()
        .then(res=>{
            console.log(res.data)
            // set state
            this.setState({
                products: res.data
            })


        })

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

    render(){
        return (<>
        <Container>
            <Row>
                <Col sm={12} md={10} lg={10} className="rem-0.125"><SearchBar/></Col>
                <Col sm={12} md={2} lg={2} className="rem-0.125"><SortingBar/></Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={3} lg={3} className="rem-0.0625 pb-2">
                    <CategorySideBar show={this.openModaltHandler}/>
                </Col>
                <Col>
                    <Row>
                        {this.state.products===[]?(<Card className="py-4 px-3" style={{"width":"100%"}}>No product in the inventory now.</Card>):(this.state.products.map(product=>(<ProductCard key={product._id} product={product} show={this.props.show} />)))}
                    </Row>
                </Col>

            </Row>
            <BackToTopBtn/>
        </Container>
        <Footer/>
        {/* <ProductModal state={this.state.productModal} show={this.openModaltHandler} close={this.closeModalHandler} product={this.state.product}/> */}
        <CategoryModal state={this.state.categoryModal} show={this.openModaltHandler} close={this.closeModalHandler} categories={this.state.categories}/>
        </>)
    }
}
                        
                        
export default Layout;
