import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';

import {Div, Button, Container, InputGroup, FormControl, Col, Row, Card } from "react-bootstrap";

function stats (props) {
    return(
        <Container>
            <Row>
            <Col md={4}>
            <Button variant="secondary" size="sm"><i className="far fa-edit pr-1"></i>Edit</Button>
            </Col>

            <Col md={4}>
            <InputGroup className="mb-3 mx-0">
            size
            <InputGroup.Append>
            </InputGroup.Append>
            </InputGroup>
            </Col>

            <Col md={4}>
            <InputGroup className="mb-3 mx-0">
            size
            <InputGroup.Append>
            </InputGroup.Append>
            </InputGroup>
            </Col>
            </Row>
            </Container>
        )
}

export default stats