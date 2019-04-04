import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Dropdown, Card, Button, Form } from "react-bootstrap";
// import CategoryCard from "./Cardbody"
// import SubcategoryCardBody from "./ViewCategoriesModal/SubcategoryCardbody"




class AddCategory extends Component {
  
  
  
  render(){
    return (
      <>

        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Edit Category
  </Dropdown.Toggle>

  <Dropdown.Menu>
  {this.props.categories.map(category=>(
    <Dropdown.Item href="#/action-1">{category.name}</Dropdown.Item>
  ))}
  </Dropdown.Menu>
</Dropdown>
</>
    )
  }
}

export default AddCategory

