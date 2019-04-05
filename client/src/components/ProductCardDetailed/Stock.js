import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import {Div, Button, Container, InputGroup, FormControl, Col, Row, Card, Table } from "react-bootstrap";


function Stock (props) {
    return(
        <>
        <Container>
                    <Row className="mb-2">
                        <Col>
                            <Button className="mr-2" size="sm" variant="success" onClick = {props.addVariant}>+ Add A Variant</Button>
                        </Col>
                    </Row>
                    <Row className="px-3 py-2">
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>Variants</th>
                                <th>Stock</th>
                                <th>Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                <td>Total</td>
                                <td>110</td>
                                <td>1000</td>
                                </tr>
                                <tr>
                                <td><input index = "1" name="name" value="XS"></input></td>
                                <td><input index = "1" name="stock" value="10"></input></td>
                                <td>0</td>
                                </tr>
                                <tr>
                                <td><input value="S"></input></td>
                                <td><input value="100"></input></td>
                                <td>1000</td>
                                </tr> */}
                                {
                                    props.stock.map(
                                    (variantItem, i) => (<tr key={i}>
                                        <td>
                                        <input 
                                            placeholder="Variant Name"
                                            onChange={e=> props.updateVariant(i, "name")(e.target.value)}  
                                            value={variantItem.name}
                                        />
                                        </td>
                                        <td> <input 
                                            placeholder="Stock"
                                            onChange={e=> props.updateVariant(i, "stock")(e.target.value)}  
                                            value={variantItem.stock}
                                        /></td>
                                        <td><input placeholder="Sales" disabled></input></td>
                                    </tr>)
                                    )
                                }
                                {/* {this.state.addVariant?(
                                    <tr>
                                        <td><input placeholder="Variant Name" name="newVariantName" onChange={this.props.inputChangeHandler}></input></td>
                                        <td><input placeholder="Stock" name="newVariantStock" onChange={this.props.inputChangeHandler}></input></td>
                                        <td><input placeholder="Sales" disabled></input></td>
                                    </tr>
                                ):(<></>)} */}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
        </>
        )
}


export default Stock