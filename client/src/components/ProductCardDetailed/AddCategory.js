import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Dropdown, Card, Button, Form } from "react-bootstrap";
// import CategoryCard from "./Cardbody"
// import SubcategoryCardBody from "./ViewCategoriesModal/SubcategoryCardbody"




function AddCategory (props) {
    return (
        <>

        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Edit Category
  </Dropdown.Toggle>



  <Dropdown.Menu>
  {props.categories.map(category=>(
    <Dropdown.Item href="#/action-1">{category.name}</Dropdown.Item>
  ))}
  </Dropdown.Menu>
</Dropdown>
</>




    )
}

export default AddCategory

