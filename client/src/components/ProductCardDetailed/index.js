import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Info from "./Info"
import Stock from "./Stock"
import Promos from "./Promos"
import Modal from 'react-bootstrap/Modal'
import {Col, Row, Card } from 'react-bootstrap'
import {Button, Tab } from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs'



class ModalComponent extends React.Component {
    // constructor(props) {
    //   super(props);
    state = { 
      show: false, 
      tab: "info"
    };

    
  
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

        <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
        <Button variant="secondary" size="sm"><i className="far fa-edit pr-1"></i>Edit</Button>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="Info" title="Info" >
              <Info />
            </Tab>
            <Tab eventKey="Stock" title="Stock">
              <Stock />
            </Tab>
            <Tab eventKey="Promos" title="Promos">
              <Promos />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
         

            
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.close}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        
      );
    }
  }
  
export default ModalComponent;