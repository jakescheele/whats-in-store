import React from 'react';
import { Modal } from 'react-bootstrap'
import '../../../index.css';
//import Happy from "../components/Dashboard/img/Happy.png"



class SalesModal extends React.Component {

    state = {
        SalesModal: false,
    }

    showModal= (modalName) => {
        this.setState({
            [modalName]: true
        })
    }

    closeModal = (modalName) => {
        this.setState({
            [modalName]: false
        })
    }


    render() {
      return (
        <>
          <Modal
          size="xl"
          show={this.props.state} 
          onHide={(e) => this.props.close("SalesModal")}
        >
            <Modal.Header closeButton>
            <div class="modalHeader">WOAH, HEY THERE</div>
            </Modal.Header>
            <Modal.Body>
            <img alt="premium" style={{"width":"100%","object-fit": "contain"}}src={require('../img/happy.png')} />
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