import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Card } from 'react-bootstrap'
import { Button, Container, InputGroup, FormControl } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import AddCategory from '../ProductCardDetailed/AddCategory';
//import CategoryCard from "./ViewCategoriesModal/CategoryCard"

// dummy categories
import categories from "../../DummyCategories.json"



class Info extends Component {
  render(){
    return (
      <Container>
        <Col lg={12}>
          <Row className="show-grid">
            <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap"></img>
          </Row>

          <Row>
            <Form.Group controlId="name">
              <Form.Control name="name" placeholder="Product Name" onChange={this.props.inputChangeHandler}/>
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Control name="price" placeholder="Price" />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Control name="description" as="textarea" rows="3" placeholder="Product Description" />
            </Form.Group>
          </Row>
        </Col>

        <Row>
          <Col lg={12}>
            {/* here is the dummy data, change here later */}
            <AddCategory categories={categories} />
          </Col>
        </Row>
      </Container>
  )
}
}

export default Info