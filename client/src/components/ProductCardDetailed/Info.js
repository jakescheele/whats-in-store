import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Card } from 'react-bootstrap'
import { Button, Container, InputGroup, FormControl } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import AddCategory from '../ProductCardDetailed/AddCategory';
import '../../fileButton.css';
// dummy categories
import categories from "../../DummyCategories.json"


class Info extends Component {
  render() {
    return (
      <Container>
          <Row className="show-grid">
          <Form.Group controlId="productImage">
              <label class="borderBlack">
                  <Form.Label className ="borderBlack">Upload Product Image</Form.Label>
              </label>
                  <label class="fileContainer">
                  <Form.Control onChange={this.handleChange} 
                  type="file" class="fileButton" name="image" display="none" placeholder="Upload Product Image"/>
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
                <Form.Control 
                required
                type="text"
                name="name" 
                placeholder="Product Name" 
                onChange={this.props.inputChangeHandler} />
                <Form.Control.Feedback type="invalid">
                  Please enter a product name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Control 
                required
                name="price" 
                placeholder="Price" 
                onChange={this.props.inputChangeHandler} />
                <Form.Control.Feedback type="invalid">
                  Please enter a product price.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Control name="description" as="textarea" rows="3" placeholder="Product Description" onChange={this.props.inputChangeHandler} />
              </Form.Group>
              <AddCategory categories={categories} dropDownSelectHandler={this.props.dropDownSelectHandler} selectedCategory={this.props.category} />
            </Form>
          </Row>
      </Container>
    )
  }
}

    export default Info
