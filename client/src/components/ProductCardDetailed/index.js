import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ProductCard from "../ProductCard"
import Modal from 'react-bootstrap/Modal'
import {Col, Row, Card } from 'react-bootstrap'
import {Button, Container} from "react-bootstrap";


class ModalComponent extends React.Component {
    // constructor(props) {
    //   super(props);
    state = { 
      show: false, 
      product: '',
      price : '' ,
      category: ''
    };
  
  
  
    handleShow=() =>{
      this.setState({
        show: true
      });
    }
    handleClose=() =>{
      this.setState({
        show: false
      });
    }
    handleChangeProduct=(event) =>{
      this.setState({product: event.target.value});
    }
    handleChangePrice=(event) =>{
      this.setState({price: event.target.value});
    }
    handleChangeCategory=(event) =>{
      this.setState({category: event.target.value});
    }
  
    handleSubmit=(event) =>{
      event.preventDefault();
       }
  
  
    render() {
      return (
        <>
        <Button variant="primary" onClick={this.handleShow}>
          Edit Product
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            EDIT PRODUCT
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Col md={6} lg={4}>
            <Row className="show-grid">


              
                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap"></img>
              
          
            <Button variant="secondary" size="sm"><i className="far fa-edit pr-1"></i>Edit</Button>
            </Row>
</Col>
            
          </Container>
        </Modal.Body>
        <Modal.Footer>
         

            
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        
      );
    }
  }
  


// React.render(<App />, document.body);
export default ModalComponent;