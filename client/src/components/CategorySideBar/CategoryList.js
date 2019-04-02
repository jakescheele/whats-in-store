import React, { Component } from "react";
import {Container, Col, Row, Card, Form} from 'react-bootstrap'

function CategoryList(props){

    return (<Form>
        <Form.Group controlId="formBasicChecbox" className="mb-2">
            <Form.Check type="checkbox" value= {props.category.name} label={props.category.name} />
        </Form.Group>
            <div className="pl-4">
                <Form.Group controlId="formBasicChecbox">
                    {props.category.sub_category.map(sub_category=>(<Form.Check type="checkbox" value= {sub_category.name} label={sub_category.name} />))}
                </Form.Group>
            </div>
    </Form>)
}

export default CategoryList