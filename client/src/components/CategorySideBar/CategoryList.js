


import React, { Component } from "react";
import {Container, Col, Row, Card, Form} from 'react-bootstrap'
import { defaultCipherList } from "constants";

function CategoryList(){

    return (<Form>
        <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Clothes" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Tops" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Bottoms" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Shoes" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Dress" />
        </Form.Group>
    </Form>)
}

export default CategoryList