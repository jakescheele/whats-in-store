import React from 'react';
import {Col, Row, Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import '../../../index.css';
//import Happy from "../components/Dashboard/img/Happy.png"



class SalesModal extends React.Component {
    
    render() {
      return (
        <>
          <Modal
          size="xl"
          show={this.props.state} 
          onHide={(e) => this.props.close("SalesModal")}
        >
            <Modal.Header className="modalHeader" closeButton>
                <Modal.Title>WOAH, HEY THERE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img style={{"width":"100%","objectFit": "contain"}}src={require('../img/happy.png')} />
            </Modal.Body>
          
            <Modal.Footer>
              <button class="blackButton" variant="secondary" onClick={(e) => this.props.close("SalesModal")}>
                I dislike paying for stuff that doesn't work
              </button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

  export default SalesModal;