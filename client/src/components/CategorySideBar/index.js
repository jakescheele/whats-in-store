

import React, { Component } from "react";
import {Container, Col, Row, Card, Form} from 'react-bootstrap'
import CategoryList from "./CategoryList"


function CategorySideBar(){


    return (<Card>
                <Card.Header>Categories</Card.Header>
                <Card.Body>
                    <CategoryList/>
                </Card.Body>
            </Card>)
}

export default CategorySideBar;
