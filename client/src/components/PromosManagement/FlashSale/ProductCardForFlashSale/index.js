import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Table, Container, Row, Col} from "react-bootstrap";

function PromoTable(props) {
    return (<>
    <Container>
        <Row>
        <Col md={{ span: 10, offset: 1}}>
   <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Product</th>
      <th>Promo Price</th>
      <th>Start Time</th>
      <th>End Time</th>
      <th>Edit / Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Spring T-shirt</td>
      <td>$30</td>
      <td>April 9, 2019</td>
      <td>April 10, 2019</td>
      <td><Button variant="success">Edit</Button>
      <Button variant="danger">Delete</Button></td>
      </tr>
    <tr>
      <td>2</td>
      <td>Casual Dress</td>
      <td>$15</td>
      <td>April 10, 2019</td>
      <td>April 30, 2019</td>
      <td><Button variant="success">Edit</Button>
      <Button variant="danger">Delete</Button></td>
    </tr>
  </tbody>
</Table>;
</Col>
</Row>
</Container>
    </>)
}

export default PromoTable
