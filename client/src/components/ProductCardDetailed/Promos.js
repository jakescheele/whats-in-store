import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap'
import Calendar from './Calendar';
import { Form, Button, Container, InputGroup, FormControl, Card } from "react-bootstrap";

function Promos() {
    return (
        <Container>
            <h5 className="mb-3">Flash Sale</h5>
            <Card className="p-3">
                <div className="my-2">
                    <span className="mr-1">Start Date</span>
                    {/* <Calendar
                    handleDatepicker={this.props.handleDatepicker}
                    />
                </div>
                <div className="my-2">
                    <span className="mr-1">End Date</span>
                    <Calendar
                    handleDatepicker={this.props.handleDatepicker}
                    /> */}
                </div>
                <InputGroup className="my-2">
                    <FormControl placeholder="Promo Price" />
                </InputGroup>
            </Card>
        </Container>
    )
}

export default Promos