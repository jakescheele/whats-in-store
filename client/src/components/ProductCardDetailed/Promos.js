import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Row, Card } from 'react-bootstrap'
import {Form, Button, Container, InputGroup, FormControl} from "react-bootstrap";



function Promos () {
    return(
        <Container>
            <Row>
            <Col md={4}>
            <Form>
                <Form.Group controlId="formBasicChecbox" className="mb-2">
                
                <Form.Check type="checkbox" />FLASH SALE 
                </Form.Group>
                </Form>
                </Col>
                </Row>
                
            <Row>
            <InputGroup className="mb-3 mx-0">
            <FormControl
            placeholder="End Time"
            />
            <InputGroup.Append>
            <Button variant="secondary">Enter</Button>
            </InputGroup.Append>
            </InputGroup>
            </Row>

            <Row>
            <InputGroup className="mb-3 mx-0">
            <FormControl
            placeholder="End Time"
            />
            <InputGroup.Append>
            <Button variant="secondary">Enter</Button>
            </InputGroup.Append>
            </InputGroup>
            </Row>

            <Row>
            <InputGroup className="mb-3 mx-0">
            <FormControl
            placeholder="Promo Price"
            />
            <InputGroup.Append>
            <Button variant="secondary">Enter</Button>
            </InputGroup.Append>
            </InputGroup>
            </Row>


            </Container>
    )
}

export default Promos