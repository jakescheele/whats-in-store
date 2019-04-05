import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import AddCategory from '../ProductCardDetailed/AddCategory';
import '../../fileButton.css';
//import CategoryCard from "./ViewCategoriesModal/CategoryCard"
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Card } from 'react-bootstrap'
import { Button, Container, InputGroup, FormControl } from "react-bootstrap";
// dummy categories
import categories from "../../DummyCategories.json"


class Info extends Component {
  render() {
  return (
          <Container>
          <Col lg={12}>
            <Form.Group controlId="productImage">
                        <label class="borderBlack">
                            <Form.Label className ="borderBlack">Upload Product Image</Form.Label>
                        </label>
                            <label class="fileContainer">
                            <Form.Control onChange={this.handleChange} 
                            type="file" class="fileButton" name="image" display="none" placeholder="Upload Product Image"/>

                        </label>
                        </Form.Group>
                        
            <Row>
            
              <Form.Group controlId="formGroupEmail">
              
              <Form.Control placeholder="Product Name" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
              
              <Form.Control placeholder="Price" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" placeholder="Product Description"  />
              </Form.Group>

            </Row>
            </Col>

            <Row>
            <Col lg={12}>
            {/* here is the dummy data, change here later */}
            <AddCategory categories={categories}/>
              </Col>
            </Row>
          </Container>
        )
    }
  }

    export default Info
