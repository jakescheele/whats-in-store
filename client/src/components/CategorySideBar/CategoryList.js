import React, { Component } from "react";
import {Container, Col, Row, Card, Form} from 'react-bootstrap'

function CategoryList(props){

    return (<Form>
        <Form.Group controlId="formBasicChecbox" className="mb-2">
            <Form.Check type="checkbox" value= {props.category.name} label={props.category.name} />
        </Form.Group>
            <div className="pl-4">
                <Form.Group controlId="formBasicChecbox">
                    {props.category.subcategories.map(subcategory=>(<Form.Check key={subcategory} type="checkbox" value= {subcategory} label={subcategory} />))}
                </Form.Group>
            </div>
    </Form>)
}

export default CategoryList