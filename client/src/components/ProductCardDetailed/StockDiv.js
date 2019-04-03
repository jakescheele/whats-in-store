import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import stats from './Stats';
import { Col, Row, Card } from 'react-bootstrap'
import { Button, Container, InputGroup, FormControl } from "react-bootstrap";

function StockDiv(props) {
    return (
            <Container>
                <Row>
                <Col md={4}>
                    <InputGroup className="mb-3 mx-0">
                        <FormControl
                            placeholder="SIZE"
                            />
                        <InputGroup.Append>
                        <Button variant="secondary">Enter</Button>
                    </InputGroup.Append>
                    </InputGroup>
                </Col>
                
                <Col md={4}>
                    <InputGroup className="mb-3 mx-0">
                        <FormControl
                            placeholder="STOCK"
                            />
                        <InputGroup.Append>
                        <Button variant="secondary">Enter</Button>
                    </InputGroup.Append>
                    </InputGroup>
                </Col>

                <Col md={4}>
                    <InputGroup className="mb-3 mx-0">
                        <FormControl
                            placeholder="PRICE"
                            />
                        <InputGroup.Append>
                        <Button variant="secondary">Enter</Button>
                    </InputGroup.Append>
                    </InputGroup>
                </Col>
                </Row>
            </Container>
    )
}


export default StockDiv