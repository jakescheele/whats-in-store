import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from "react-bootstrap";




class AddSubcategory extends Component {
  
  render(){
    return (
      <>
      <Form.Group className="mb-3 mx-0">
            <Form.Label className ="pl-1">Product Category</Form.Label>
            <Form.Control 
            required
            name="subcategory" 
            as="select" 
            style={{"width": "100%"}} 
            onChange={this.props.dropDownSelectHandler}
            >
              <option disabled selected>Select a subcategory</option>
              {this.props.selectedCategory.hasOwnProperty("subcategories")?(this.props.selectedCategory.subcategories.length===0?
              (<></>)
              :(this.props.selectedCategory.subcategories.map((subcategory,i)=>(parseInt(this.props.selectedSubcategory)===i)?
              (<option key={i} value={i} selected>{subcategory}</option>)
              :(<option key={i} value={i}>{subcategory}</option>))
            )):(<></>)}
            
            </Form.Control>
            
            <Form.Control.Feedback type="invalid">
              Please select a category.
            </Form.Control.Feedback>
      
      </Form.Group>
</>
    )
  }
}

export default AddSubcategory

