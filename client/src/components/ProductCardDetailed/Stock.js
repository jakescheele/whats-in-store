import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Col, Row, Table } from "react-bootstrap";


class Stock extends Component {
    

    render(){
        return (
            <>
                <Container>
                    <Row className="mb-2">
                        <Col>
                            <Button 
                            className="mr-2" 
                            size="sm" 
                            variant="success" 
                            onClick={this.props.addVariant}>+ Add A Variant</Button>
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
                                <tr>
                                    <td>Total</td>
                                    <td>{this.props.totalStock}</td>
                                    <td></td>
                                </tr>
                                {this.props.stock.map(
                                        (variantItem, i) => (<tr key={i}>
                                            <td>
                                                <input
                                                    placeholder="Variant Name"
                                                    onChange={e => this.props.updateVariant(i, "name")(e.target.value)}
                                                    value={variantItem.name}
                                                />
                                            </td>
                                            <td> <input
                                                placeholder="Stock"
                                                onChange={e => this.props.updateVariant(i, "stock")(e.target.value)}
                                                value={variantItem.stock}
                                            /></td>
                                            <td><input disabled></input></td>
                                        </tr>)
                                    )
                                }
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </>
    )}
}


export default Stock