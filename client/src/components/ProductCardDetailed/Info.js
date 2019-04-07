import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import AddCategory from '../ProductCardDetailed/AddCategory';
import '../../fileButton.css';
// dummy categories
import categories from "../../DummyCategories.json"

class Info extends Component {


  componentDidMount() {
    console.log("============Here is in info for props.category========")
    console.log(this.props.selectedCategory)
  }


  render() {
    return (
      <Container>
        <Row className="p-0 justify-content-center">
          <Col sm="auto" md="auto" lg="auto">
          {this.props.image.img_url?(<img alt="product" src={this.props.image.img_url} />):(<img alt="product" src={process.env.PUBLIC_URL + '/placeholder.png'} />)}
          </Col>
        </Row>
        <Row>
          <Form
            noValidate
            validated={this.props.validated}
            onSubmit={e => this.props.handleSubmit(e)}
            className="my-3"
            style={{ "width": "100%" }}
          >
            <Form.Group controlId="productImage">
              <Form.Label variant="outline-dark" block>
                Upload Image 
              </Form.Label>
              <Form.Control 
                style={{"color":"rgb(0,0,0,0)"}}
                onChange={this.props.uploadImage}
                type="file" 
                className="fileButton" 
                name="image" 
                display="none" 
                placeholder="Upload Product Image" />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label className="pl-1">Product Name</Form.Label>
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
              <Form.Label className="pl-1">Product Price</Form.Label>
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
              <Form.Label className="pl-1">Product Description</Form.Label>
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
        </Row>
      </Container>
    )
  }
}

export default Info
