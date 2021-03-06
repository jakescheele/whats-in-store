import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Table, Container, Row, Col} from "react-bootstrap";
import 'moment-timezone';
import Moment from 'react-moment';


function PromoTable(props) {
  
    return (<>
    <Container>
        <Row>
        <Col md={{ span: 10, offset: 1}}>
   <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Product</th>
      <th>Promo Price</th>
      <th>Start Time</th>
      <th>End Time</th>
      <th>Edit / Delete</th>
    </tr>
  </thead>
  <tbody>
    {props.saleProducts.map(saleProduct=>(
      <tr key={saleProduct.name}>
      <td>{saleProduct.name}</td>
      <td>{saleProduct.flashSales.price}</td>
      <td>
        <Moment format="YYYY-MM-DD HH:mm:ss">
        {saleProduct.flashSales.startDate}
        </Moment>
      </td>
      <td>
        <Moment format="YYYY-MM-DD HH:mm:ss">
        {saleProduct.flashSales.endDate}
        </Moment>
        </td>
      <td>
          <Button className="mx-2" variant="outline-success">Edit</Button>
          <Button className="mx-2" variant="outline-danger">Delete</Button>
      </td>
      </tr>
    ))}
  </tbody>
</Table>;
</Col>
</Row>
</Container>
    </>)
}

export default PromoTable
