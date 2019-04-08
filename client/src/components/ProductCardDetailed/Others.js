import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

function Others(props) {
    return (
        <Container style={{"height":"100%"}}>
            <Row className="align-items-center" style={{"height":"100%"}}>
                <Col>
                <Button 
                    onClick={e=>props.deleteProduct(props.productid)}
                    variant="outline-danger" 
                    block
                > Delete Product </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Others