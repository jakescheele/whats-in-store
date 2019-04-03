import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Row, Card } from 'react-bootstrap'
import {Button, Container, InputGroup, FormControl} from "react-bootstrap";
import Form from 'react-bootstrap/Form';



function Info (props) {
return (
          <Container>
          <Col lg={12}>
            <Row className="show-grid">
                <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap"></img>
            </Row>
            
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
            
          </Container>
        )
    }

    export default Info