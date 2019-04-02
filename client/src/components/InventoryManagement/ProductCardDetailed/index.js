import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";


export default class ModalComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { modal: false,product: '',price :'' ,category: ''};
  
      this.toggle = this.toggle.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeTeam = this.handleChangeTeam.bind(this);
      this.handleChangeCountry = this.handleChangeCountry.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    handleChangeName(event) {
      this.setState({produc: event.target.value});
    }
    handleChangeTeam(event) {
      this.setState({price: event.target.value});
    }
    handleChangeCountry(event) {
      this.setState({category: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
       }
  
  
    render() {
      return (
  
          <div>
            <h1>Modal</h1>
          <Button color="success" onClick={this.toggle}>React Modal</Button>
          <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>Product Card</ModalHeader>
            <ModalBody>
            <div className="row">
              <div className="form-group col-md-4">
              <label>Product:</label>
              <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
                </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
              <label>Price:</label>
                  <input type="text" value={this.state.team} onChange={this.handleChangeTeam} className="form-control" />
                 </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
                <label>Category:</label>
                  <input type="text" value={this.country} onChange={this.handleChangeCountry} className="form-control" />
                 </div>
                </div>
            </ModalBody>
            <ModalFooter>
              <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </form>
          </Modal>
          </div>
        
      );
    }
  }
  


// React.render(<App />, document.body);
export default ModalComponent;