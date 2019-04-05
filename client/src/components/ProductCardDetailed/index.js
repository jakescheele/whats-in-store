import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Info from "./Info"
import Stock from "./Stock"
import Promos from "./Promos"
import Modal from 'react-bootstrap/Modal'
import { Col, Row, Card } from 'react-bootstrap'
import { Button, Tab, Tabs } from "react-bootstrap";
import ProductAPI from "../../utils/API/products"



class ModalComponent extends React.Component {

  state = {
    productid: "",
    name: "",
    category: "",
    // subcategory:"",
    // image:"",
    price: "",
    description: "",
    stock: [],
    validated: false,
    newVariantName:"",
    newVariantStock:""
  }
  


  inputChangeHandler = (e) => {
    let { name, value } = e.target
    console.log(name)
    console.log(value)
    this.setState({
      [name]: value
    })
  }

  dropDownSelectHandler = (e)=>{
    let { name, value } = e.target
    console.log(name)
    console.log(value)
    this.setState({
      [name]: value
    })
  }

  stockChangeHandler=(e)=>{
    let { index, name, value} = e.target
    
    let newStock = this.stock.map((variant, i)=>{
      if(i===index){
        variant[name] = value
      }
      return variant
    })
    this.setState({
      stock: newStock
    })
    
  }

  newVariantSubmitHandler=()=>{
    console.log("=======set new variant========")

    let newVariantObj = {
      name: this.state.newVariantName,
      stock: this.state.newVariantStock
    }
    this.setState({
      stock: [...this.state.stock, {
        name: this.state.newVariantName,
        stock: this.state.newVariantStock
      }]
    })
    console.log("=========here is the new variant=========")
    console.log(newVariantObj)
    console.log(this.state.stock)
    console.log("===================================")
    
  }

  handleSubmit = (event) => {
    // add new variant of stock
    if(this.state.newVariantName && this.state.newVariantStock){
      this.newVariantSubmitHandler()
    }
    
    // validation
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });

    // make axio request to create new product
    if (this.state.name && this.state.price && this.state.category){
      console.log("=========here is the state=========")
      console.log(this.state)
      console.log("===================================")
      console.log("Hello! I'm here trying to thit the save Product!")
      ProductAPI.saveProduct(this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err));

      // close the modal after save changes
      // this.props.close("productModal")
      // window.location.reload()
    }
  }


  render() {

    return (
      <>
        <Modal size="lg" show={this.props.state} onHide={(e) => this.props.close("productModal")}>
          <Modal.Header closeButton>
            <Button variant="secondary" size="sm"><i className="far fa-edit pr-1"></i>Edit</Button>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey="Info" transition={false} id="noanim-tab-example">
              <Tab eventKey="Info" title="Info">
                <Info validated={this.state.validated} handleSubmit={this.handleSubmit} inputChangeHandler={this.inputChangeHandler} dropDownSelectHandler={this.dropDownSelectHandler} selectedCategory={this.state.category}/>
              </Tab>
              <Tab eventKey="Stock" title="Stock">
                <Stock stock={this.state.stock} stockChangeHandler={this.stockChangeHandler} inputChangeHandler={this.inputChangeHandler}/>
              </Tab>
              <Tab eventKey="Promos" title="Promos">
                <Promos />
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(e) => this.props.close("productModal")}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={this.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

    );
  }
}

export default ModalComponent;