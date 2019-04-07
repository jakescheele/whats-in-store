import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Info from "./Info"
import Stock from "./Stock"
import Promos from "./Promos"
import Modal from 'react-bootstrap/Modal'
import { Button, Tab, Tabs } from "react-bootstrap";


class ModalComponent extends React.Component {

  componentDidMount(){
    console.log("============Here is in Product Modal for props.category========")
    console.log(this.props.selectedCategory)
    console.log(this.props.productName)
  }

  render() {

    return (
      <>
        <Modal size="lg" 
        show={this.props.state} 
        onHide={(e) => this.props.close("productModal")}>
        <Modal.Header closeButton>
          <div className="modalHeader">
            <Modal.Title id="contained-modal-title-vcenter">
                VIEW/EDIT PRODUCT
            </Modal.Title>
          </div>
        </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey="Info" transition={false} id="noanim-tab-example">
              <Tab eventKey="Info" title="Info">
                <Info 
                // product methods
                validated={this.props.validated} 
                handleSubmit={this.props.handleSubmit} 
                inputChangeHandler={this.props.inputChangeHandler} 
                dropDownSelectHandler={this.props.dropDownSelectHandler}
                uploadImage={this.props.uploadImage}

                // product info
                productid={this.props._id}
                productName={this.props.productName} 
                price={this.props.price} 
                description = {this.props.description} 
                selectedCategory={this.props.selectedCategory}
                image={this.props.image}
                />
              </Tab>
              <Tab eventKey="Stock" title="Stock">
                <Stock 
                stock={this.props.stock} 
                totalStock={this.props.totalStock}
                addVariant={this.props.addVariant} 
                updateVariant={this.props.updateVariant}/>
              </Tab>
              <Tab eventKey="Promos" title="Promos">
                <Promos 
                handleDatepicker={this.props.handleDatepicker}
                flashSales={this.props.flashSales}
                handleSalesPrice={this.props.handleSalesPrice}
                handleCheckBox={this.props.handleCheckBox}
                />
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(e) => this.props.close("productModal")}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={this.props.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

    );
  }
}

export default ModalComponent;