import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from "react-bootstrap";
const emptyCategory = { name: "", subcategories: [] }




class AddSubcategory extends Component {
  
  render(){
    const catObj = this.props.categories.find(category => category._id === this.props.selectedCategory|| category._id === this.props.selectedCategory._id)|| {...emptyCategory}
    return (
      <>
      <Form.Group className="mb-3 mx-0">
            <Form.Label className ="pl-1">Product Subcategory</Form.Label>
            <Form.Control 
            required
            name="subcategory" 
            as="select" 
            style={{"width": "100%"}} 
            onChange={this.props.dropDownSelectHandler}
             
            >
              <option disabled selected>Select a subcategory</option>
              {catObj.hasOwnProperty("subcategories")?
              (catObj.subcategories.length===0?
              (<></>)
              :(catObj.subcategories.map((subcategory,i)=>this.props.selectedSubcategory===subcategory?
              (<option key={i} value={subcategory} selected>{subcategory}</option>)
              :(<option key={i} value={subcategory}>{subcategory}</option>))
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

