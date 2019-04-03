import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal'
import {Col, Row, Card } from 'react-bootstrap'
import {Button, Container, InputGroup, FormControl} from "react-bootstrap";


function Info (props) {
return (
          <Container>
          <Col lg={12}>
            <Row className="show-grid">
                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap"></img>
            </Row>
            
            <Row>
            <InputGroup className="mb-3 mx-0">
            <FormControl
            placeholder="Edit Product Name"
            />
            <InputGroup.Append>
            <Button variant="secondary">Enter</Button>
            </InputGroup.Append>
            </InputGroup>
            </Row>


            <Row>
            <InputGroup className="mb-3 mx-0">
            <FormControl
            placeholder="Edit Price"
            />
            <InputGroup.Append>
            <Button variant="secondary">Enter</Button>
            </InputGroup.Append>
            </InputGroup>
            </Row>
           
            </Col>
            
          </Container>
        )
    }

    export default Info