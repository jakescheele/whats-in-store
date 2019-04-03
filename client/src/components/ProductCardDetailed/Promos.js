import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Row } from 'react-bootstrap'
import Calendar from './Calendar'; 
import {Form, Button, Container, InputGroup, FormControl} from "react-bootstrap";

function Promos () {
    return(
        <Container>
            <Row>
            <Col lg={12}>

            <Form>
            {['checkbox' ].map(type => (
            <div key={`-${type}`} className="mb-3">
            <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Flash Sale ${type}`}
            />
            </div>
            ))}
            </Form>

            </Col>
            
            <Col lg={12}>  
            <Row>
                Start Date
            <Calendar></Calendar>
            </Row>
           
            <Row>
                End Date
            <Calendar></Calendar>
            </Row></Col>  

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