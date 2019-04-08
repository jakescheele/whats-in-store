import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from "react-bootstrap";




class AddCategory extends Component {
  
  
  render(){
    return (
      <>
      <Form.Group className="mb-3 mx-0">
            <Form.Label className ="pl-1">Product Category</Form.Label>
            <Form.Control 
            required
            name="category" 
            as="select" 
            style={{"width": "100%"}} 
            onChange={this.props.dropDownSelectHandler}
            >
              <option disabled selected>Select a category</option>
              {this.props.categories.map(category=>
              (category._id === this.props.selectedCategory)?
              (<option key={category.name} value={category._id} selected>{category.name} </option>)
              :(<option key={category.name} value={category._id}>{category.name}</option>)
            )}
            
            </Form.Control>
            
            <Form.Control.Feedback type="invalid">
              Please select a category.
            </Form.Control.Feedback>
      
      </Form.Group>
</>
    )
  }
}

export default AddCategory

