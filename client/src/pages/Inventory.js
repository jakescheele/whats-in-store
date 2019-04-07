import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/LayoutForInventory.js";
import Nav from "../components/NavBar";
import { Button } from 'react-bootstrap'
import ProductModal from '../components/ProductCardDetailed'
import Footer from "../components/Footer"

import axios from "axios";
import ProductAPI from "../utils/API/products";
import CategoryAPI from "../utils/API/categories"
const emptyVariant = { name: "", stock: 0 };
const emptyCategory = { name: "", subcategories: [], _id: ""}
const emptyFlashSale = {checked: false, startDate: new Date(), endDate: new Date(), price: "0"}
const emptyImage = {img_url: "", img_id:""}




class Inventory extends Component {
    state = {
        productModal: false,
        login: false,
        shop: {},

        //categories on the sidebar
        categories: [],

        // products on the dom
        products:[],
        filters:{},
        filteredProducts:[],

        // the product state
        productid: "",
        name: "",
        category: {...emptyCategory},
        price: "",
        description: "",
        stock: [{ ...emptyVariant }],
        image:{...emptyImage},
        flashSales: {...emptyFlashSale},

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
                // get all the categories belonging to the user
                CategoryAPI.getCategories()
                .then(res=>{
                    console.log(res.data)
                    // set the original state.filters obj
                    this.setState(prevState=>{
                        const categories= res.data
                        let filters={...prevState.filters}
                        
                        res.data.forEach(cat=>
                            filters = {
                                ...filters,
                                [cat._id]: true
                            }
                        )
                        return{
                            categories,
                            filters
                        }
                    })
                })

                // get all the products belonging to the user
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
                            flashSales: {...res.data.flashSales},
                            image: {...res.data.image},
                            [modalname]: true
                        })
                    }
                    console.log("===========Here is the original category state =================") 
                    console.log(this.state.category)
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
                image:{...emptyImage},
                [modalname]: true
            })


        }

    }

    // image upload 
    uploadImage = (event) => {
        const files = Array.from(event.target.files)
        const formData = new FormData()
        files.forEach((file, i) => {
          formData.append(i, file)
        })
    
        axios.post('/api/products/uploadImage', formData, 
        { headers: {'Content-Type': 'multipart/form-data'}})
          .then(images => {
            
            let newImage = {
                img_url: images.data[0].secure_url,
                img_id: images.data[0].public_id
            }

            console.log(newImage)
            
            this.setState({
                image: {...newImage}
            })

            console.log(this.state.image)
          })
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

    // methods for stock page
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

    // methods for promo page
    handleCheckBox=(e)=>{
        const {checked} = e.target
        this.setState({ 
            flashSales: {...this.state.flashSales, checked : checked}
        })
    }


    handleDatepicker= (date, name) => {
        console.log(name)
        console.log(date)
        this.setState({
            flashSales: {...this.state.flashSales, [name] : date}
        });
    }

    handleSalesPrice = (e)=>{
        let { name, value } = e.target
        console.log(name)
        console.log(value)
        this.setState({
            flashSales: {...this.state.flashSales, [name] : value}
        })
    }


    // submit btn

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
                .then(res => {
                    console.log(res)
                    this.closeModalHandler("productModal")
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err)
                    alert("Oops! Something wrong! Try it again!")
                
                });

            // close the modal after save changes
           
        }
    }

    // filter handler
    // checkbox handler
    handleCheckBox=(e)=>{
        const {name, checked} = e.target
        console.log(checked)
        console.log(name)
    
        // let checkObj = {
        //   [value]: checked
        // }
    
        this.setState(prevState=>{
            //set state with previous state key/value and change the checked key/value
            const filters = {...prevState.filters, [name]: checked}
            
            const filteredCatsIds = Object.keys(filters).filter(
                // return the id of cats whose value is true
                filterKey=>filters[filterKey]
            )
            
            const filteredProducts =prevState.products.filter(product=>
                filteredCatsIds.some(

                    filteredCatsId=>filteredCatsId===product.category
                )
            )
            console.log("=======Here is the filters ========")
            console.log(filters)
            console.log("=======Here is the filtered Cats Ids ========")
            console.log(filteredCatsIds)
            console.log("=======Here is the filtered product========")
            console.log(filteredProducts)
            
            return{
                filters,
                filteredProducts
            }

        })
          
    }

    handleUpdateDom=()=>{
        

        
        // backend
        // db.User.findOne({_id:req.user._id})
        // .populate("products")
        // .then(user=>{
        //   let filteredPrds = []
        //   for(let i in req.body.filteredCats){
        //     for(let j in user.products){
        //       if(req.body.filteredCats[i]===user.products[j].category){
        //         filteredPrds.push(user.products[j]) 
        //       }
        //     }
        //   }
        //   res.json(filteredPrds)
        // })
        
    }

    // sorting handler


    render() {
        const products = this.state.filteredProducts.length
        ? this.state.filteredProducts
        : this.state.products;
        return (<>
            <Nav shop={this.state.shop} />
            <Jumbotron pageName="INVENTORY" instructions="Click to view and edit products and categories.">
                <Button variant="outline-dark" size="lg" onClick={(e) => this.openModaltHandler(null, "productModal")}><i className="far fa-plus-square mr-2"></i> Add New Product</Button>
            </Jumbotron>
            <Layout
                products={products}
                categories={this.state.categories}
                state={this.state.productModal}
                show={this.openModaltHandler}
                close={this.closeModalHandler} 
                handleCheckBox={this.handleCheckBox}
                filters={this.state.filters}
            />

            <ProductModal
                // modal methods
                state={this.state.productModal}
                show={this.openModaltHandler}
                close={this.closeModalHandler}
                // product methods
                product={this.state.product}
                inputChangeHandler={this.inputChangeHandler} dropDownSelectHandler={this.dropDownSelectHandler} 
                updateVariant={this.updateVariant}
                addVariant={this.addVariant}
                handleDatepicker={this.handleDatepicker}
                handleSalesPrice={this.handleSalesPrice}
                handleCheckBox={this.handleCheckBox}
                uploadImage={this.uploadImage}
                // submit methods
                handleSubmit={this.handleSubmit}
                validated={this.state.validated}
                // product info
                productid={this.state._id}
                productName={this.state.name}
                price={this.state.price}
                stock={this.state.stock}
                description={this.state.description}
                selectedCategory={this.state.category}
                flashSales={this.state.flashSales}
                image={this.state.image}
                
            />
            <Footer/>
        </>)
    }
}

export default Inventory;
