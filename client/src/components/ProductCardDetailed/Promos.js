import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap'
import Calendar from './Calendar';
import { Form, Button, Container, InputGroup, FormControl, Card } from "react-bootstrap";

function Promos() {
    return (
        <Container>
            <Form>
                {['checkbox'].map(type => (
                    <div key={`-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`Flash Sale ${type}`}
                        />
                    </div>
                ))}
            </Form>

            <Card className="p-3">
                <div className="my-2">
                    <span className="mr-1">Start Date</span>
                    <Calendar></Calendar>
                </div>
                <div className="my-2">
                    <span className="mr-1">End Date</span>
                    <Calendar></Calendar>
                </div>
                <InputGroup className="my-2">
                    <FormControl placeholder="Promo Price" />
                </InputGroup>
            </Card>
        </Container>
    )
}

export default Promos