import React from 'react';
import {Col, Row, Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import '../../../index.css';
//import Happy from "../components/Dashboard/LineChart/img/Happy.png"



class SalesModal extends React.Component {
  
    render() {
  
      return (
        <>
          <Modal size="lg" 
          show={this.props.state} 
          onHide={(e) => this.props.close("SalesModal")}>
          <div class="modalHeader">
            <Modal.Header closeButton>
              Woah, hey there!
            </Modal.Header></div>
           
            <Modal.Body>
                <img src="/img/happy.png"></img>
            </Modal.Body>
            
            <Modal.Footer>
              <Button variant="secondary" onClick={(e) => this.props.close("SalesModal")}>
                I dislike paying for stuff that doesn't work
              </Button>
            </Modal.Footer>
          </Modal>
        </>
  
      );
    }
  }

  export default SalesModal;







/*Wow, check it out! You’ve discovered a feature only available to premium members.
                    Keep track of your sales history today by paying 12 installments of $99, to 
                    support the Nigerian Prince Foundation.*/