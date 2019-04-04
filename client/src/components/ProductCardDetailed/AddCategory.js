import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Dropdown, Card, Button, Form } from "react-bootstrap";

class AddCategory extends Component {
  
  
  
  render(){
    return (
      <>
      <Form className="mb-3 mx-0" inline>
            <Form.Control as="select" style={{"width": "100%"}} >
            {this.props.categories.map(category=>(
            <option value="default">{category.name}</option>  ))}
            </Form.Control>
      </Form>
</>
    )
  }
}

export default AddCategory

