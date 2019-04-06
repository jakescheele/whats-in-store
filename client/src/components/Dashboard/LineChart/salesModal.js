import React from 'react';
import {Col, Row, Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import '../../../index.css';
//import Happy from "../components/Dashboard/img/Happy.png"



class SalesModal extends React.Component {
    render() {
      return (
        <>
          <Modal
          show={this.props.state} 
          onHide={(e) => this.props.close("SalesModal")}
        >
         
          
          <div class="modalHeader">
          WOAH, HEY THERE
            <Modal.Header closeButton>
            <div class="modalImage">
            <img src={require('../img/happy.png')} />
            </div>
            </Modal.Header>
          </div>
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