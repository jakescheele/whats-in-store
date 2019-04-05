import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import StockDiv from "./StockDiv";
import {Div, Button, Container, InputGroup, FormControl, Col, Row, Card } from "react-bootstrap";


function Stock (props) {
    return(
        <>
        {/* <Container> */}
            <StockDiv stock={props.stock} stockChangeHandler={props.stockChangeHandler} inputChangeHandler={props.inputChangeHandler}/>
        {/* </Container> */}
        </>
        )
}


export default Stock