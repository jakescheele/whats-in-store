import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Info from "./Info"
import Stock from "./Stock"
import Promos from "./Promos"
import Modal from 'react-bootstrap/Modal'
import { Col, Row, Card } from 'react-bootstrap'
import { Button, Tab, Tabs } from "react-bootstrap";
import ProductAPI from "../../utils/API/products"


const emptyVariant = {name:"", stock:0};
class ModalComponent extends React.Component {
  // constructor(props) { //fixed
  //   super(props); //fixed
  //   this.state ={
      
  //       productid: "",
  //       name: "",
  //       category: "",
  //       // subcategory:"",
  //       // image:"",
  //       price: "",
  //       description: "",
  //       stock: [{...emptyVariant}],
  //       validated: false,
  //   }
  // }

  
  
  

  // // get data of the product fromt the DB
  // componentDidMount () {
  //   console.log("==========Here is product that is clicked==============")
  //   console.log(this.props.product)
  //   // set the clicked product info to state
  //   // this.setState({
  //   //   productid:  this.props.product._id,
  //   //   name: this.props.product.name,
  //   //   price: this.props.product.price,
  //   //   description: this.props.product.description,
  //   //   category: {...this.props.product.category},
  //   // })
  //   // save the stock array to state.stock
  //   if (this.props.product.stock !== false)
  //     this.setState({stock: this.props.product.stock})
  //   // if (this.props.product.stock.length === 0) {
  //   //   this.setState({stock: {...emptyVariant}})
  //   // }
  // }


  // inputChangeHandler = (e) => {
  //   let { name, value } = e.target
  //   console.log(name)
  //   console.log(value)
  //   this.setState({
  //     [name]: value
  //   })
  // }

  // dropDownSelectHandler = (e)=>{
  //   let { name, value } = e.target
  //   console.log(name)
  //   console.log(value)
  //   this.setState({
  //     [name]: value
  //   })
  // }

  // updateVariant = (varientIndex, field) => value => {
  //   this.setState(
  //     {
  //       stock: this.state.stock.map((item, i) => i===varientIndex? {...item, [field]: value} : {...item})
  //     }
  //   )
  // }
  
  // addVariant = () => {
  //   this.setState({
  //     stock: [...this.props.product.stock, {...emptyVariant}]
  //   })
  // }


  // handleSubmit = (event) => {
    
  //   // validation
  //   const form = event.currentTarget
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   this.setState({ validated: true });

  //   // make axio request to create new product
  //   if (this.state.name && this.state.price && this.state.category){
  //     console.log("=========here is the state=========")
  //     console.log(this.state)
  //     console.log("===================================")
  //     console.log("Hello! I'm here trying to thit the save Product!")
  //     ProductAPI.saveProduct(this.state)
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));

  //     // close the modal after save changes
  //     this.props.close("productModal")
  //     window.location.reload()
  //   }
  // }


  render() {

    return (
      <>
        <Modal size="lg" 
        show={this.props.state} 
        onHide={(e) => this.props.close("productModal")}>
          <Modal.Header closeButton>
            <Button variant="secondary" size="sm"><i className="far fa-edit pr-1"></i>Edit</Button>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey="Info" transition={false} id="noanim-tab-example">
              <Tab eventKey="Info" title="Info">
                <Info 
                // product methods
                validated={this.props.validated} 
                handleSubmit={this.props.handleSubmit} 
                inputChangeHandler={this.props.inputChangeHandler} dropDownSelectHandler={this.props.dropDownSelectHandler}
                // product info
                productid={this.props._id}
                productName={this.props.name} 
                price={this.props.price} 
                description = {this.props.description} 
                selectedCategory={{...this.props.category}}
                />
              </Tab>
              <Tab eventKey="Stock" title="Stock">
                <Stock 
                stock={this.props.stock} 
                addVariant={this.props.addVariant} 
                updateVariant={this.props.updateVariant}/>
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