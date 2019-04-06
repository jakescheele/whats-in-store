import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Card } from 'react-bootstrap'
import { Button, Container, InputGroup, FormControl } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import AddCategory from '../ProductCardDetailed/AddCategory';
import '../../fileButton.css';
// dummy categories
import categories from "../../DummyCategories.json"
import Axios from "axios";

class Info extends Component {


  handleChange = (event) => {
    const files = Array.from(event.target.files)
    const formData = new FormData()
    files.forEach((file, i) => {
      formData.append(i, file)
    })

    Axios.post('/api/products/uploadImage', formData, 
    { headers: {'Content-Type': 'multipart/form-data'}})
      .then(images => {
        console.log(images.data[0].public_id)
        console.log(images.data[0].secure_url)
      })
  }

  componentDidMount(){
    console.log("============Here is in info for props.category========")
    console.log(this.props.selectedCategory)
  }
  render() {
    return (
      <Container>
          <Row className="show-grid">
          <Form.Group controlId="productImage">
              <label className="borderBlack">
                  <Form.Label className ="borderBlack">Upload Product Image</Form.Label>
              </label>
                  <label className="fileContainer">
                  <Form.Control onChange={this.handleChange} 
                  type="file" className="fileButton" name="image" display="none" placeholder="Upload Product Image"/>
              </label>
            </Form.Group>
          </Row>

          <Row>
            <Form
              noValidate
              validated={this.props.validated}
              onSubmit={e => this.props.handleSubmit(e)}
              className="my-3"
              style={{"width":"100%"}}
            >
              <Form.Group controlId="name">
                <Form.Label className ="pl-1">Product Name</Form.Label>
                <Form.Control 
                required
                type="text"
                name="name" 
                placeholder="Product Name" 
                value={this.props.productName}
                onChange={this.props.inputChangeHandler} />
              <Form.Control.Feedback type="invalid">
                Please enter a product name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label className ="pl-1">Product Price</Form.Label>
                <Form.Control 
                required
                name="price" 
                placeholder="Price" 
                value={this.props.price}
                onChange={this.props.inputChangeHandler} />
              <Form.Control.Feedback type="invalid">
                Please enter a product price.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label className ="pl-1">Product Description</Form.Label>
                <Form.Control 
                name="description" 
                as="textarea" 
                rows="3" 
                placeholder="Product Description" 
                value={this.props.description}
                onChange={this.props.inputChangeHandler} />
              </Form.Group>
              <AddCategory 
                categories={categories} 
                dropDownSelectHandler={this.props.dropDownSelectHandler} 
                selectedCategory={this.props.selectedCategory} />
            </Form>
          </Row >
      </Container>
    )
  }
}

export default Info
