import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/LayoutForInventory.js";
import Nav from "../components/NavBar";
import { Button } from 'react-bootstrap'
import ProductModal from '../components/ProductCardDetailed'
import axios from "axios";
import ProductAPI from "../utils/API/products";
import CategoryAPI from "../utils/API/categories"
const emptyVariant = { name: "", stock: 0 };


class Inventory extends Component {
    state = {
        productModal: false,
        login: false,
        shop: {},
        categories: [],
        products:[],
        // the product state
        productid: "",
        name: "",
        category: {},
        price: "",
        description: "",
        stock: [{ ...emptyVariant }],
        // image:"",
        // validator for submit
        validated: false,
    }

    componentDidMount() {
        // check if the user has logged in
        axios.get("/auth/test")
        .then(res=>{
            console.log(res.data)
            if(res.data==="no user"){
                console.log("no user log in")
                window.location.assign("/")
            }else{
                console.log("user logged in")
                this.setState({login: true,shop: res.data})
                CategoryAPI.getCategories()
                .then(res=>{
                    console.log(res.data)
                    this.setState({categories: res.data})
                })
                ProductAPI.getProducts()
                .then(res=>{
                    console.log(res.data)
                    this.setState({products: res.data})
                
                
                })
            }
        })
        
    }

    openModaltHandler = (id, modalname) => {

        if (id) {
            console.log("===========You are going to see specific product=================")
            console.log(id)

            // make ajax request to the backend and get the viewed product
            ProductAPI.getProduct(id)
                .then(res => {

                    
                    if (res.data.stock.length === 0) {
                        console.log("the stock array is empty")
                        this.setState({ 
                            [modalname]: true
                        })
                        
                    }else{
                        console.log("the stock array has a lot")
                        this.setState({
                            productid: res.data._id,
                            name: res.data.name,
                            stock: res.data.stock,
                            price: res.data.price,
                            description: res.data.description,
                            category: { ...res.data.category },
                            [modalname]: true
                        })
                    }
                })



        } else {
            console.log("===========You are going to see new product=================")
            this.setState({
                productid: "",
                name: "",
                category: {},
                price: "",
                description: "",
                stock: [{ ...emptyVariant }],
                [modalname]: true
            })


        }

    }

    // methods for the product info management
    inputChangeHandler = (e) => {
        let { name, value } = e.target
        console.log(name)
        console.log(value)
        this.setState({
            [name]: value
        })
    }


    dropDownSelectHandler = (e) => {
        let { name, value } = e.target
        console.log(name)
        console.log(value)
        this.setState({
            [name]: value
        })
    }


    closeModalHandler = (modalname) => {
        this.setState({
            [modalname]: false
        })
    }

    updateVariant = (varientIndex, field) => value => {
        this.setState(
            {
                stock: this.state.stock.map((item, i) => i === varientIndex ? { ...item, [field]: value } : { ...item })
            }
        )
    }

    addVariant = () => {
        console.log("=====================Click !!!!=====================")
        this.setState({
            stock: [...this.state.stock, { ...emptyVariant }]
        })
    }

    handleSubmit = (event) => {

        // validation
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });

        // make axio request to create new product
        if (this.state.name && this.state.price && this.state.category) {
            console.log("=========here is the state=========")
            console.log(this.state)
            console.log("===================================")
            console.log("Hello! I'm here trying to hit the save Product!")
            ProductAPI.saveProduct(this.state)
                .then(res => console.log(res))
                .catch(err => console.log(err));

            // close the modal after save changes
            this.closeModalHandler("productModal")
            window.location.reload()
        }
    }


    render() {
        return (<>
            <Nav shop={this.state.shop} />
            <Jumbotron pageName="INVENTORY" instructions="Click to view and edit products and categories.">
                <Button variant="outline-dark" size="lg" onClick={(e) => this.openModaltHandler(null, "productModal")}><i className="far fa-plus-square mr-2"></i> Add New Product</Button>
            </Jumbotron>
            <Layout
                products={this.state.products}
                categories={this.state.categories}
                state={this.state.productModal}
                show={this.openModaltHandler}
                close={this.closeModalHandler} />

            <ProductModal
                // modal methods
                state={this.state.productModal}
                show={this.openModaltHandler}
                close={this.closeModalHandler}
                // product methods
                product={this.state.product}
                inputChangeHandler={this.inputChangeHandler} dropDownSelectHandler={this.dropDownSelectHandler} updateVariant={this.updateVariant}
                addVariant={this.addVariant}
                // submit methods
                handleSubmit={this.handleSubmit}
                validated={this.state.validated}
                // product info
                productid={this.state._id}
                productName={this.state.name}
                price={this.state.price}
                stock={this.state.stock}
                description={this.state.description}
                selectedCategory={{ ...this.state.category }}

            />
        </>)
    }
}

export default Inventory;
