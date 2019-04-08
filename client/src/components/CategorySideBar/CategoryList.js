import React from "react";
import {Form} from 'react-bootstrap'

function CategoryList(props){

    return (<Form>
        <Form.Group controlId="formBasicChecbox" className="mb-2">
            <Form.Check 
            type="checkbox" 
            checked={props.filters[props.category._id]}
            name= {props.category._id} 
            label={props.category.name} 
            onChange={props.handleCheckBox}
            />
        </Form.Group>
            {/* <div className="pl-4">
                <Form.Group controlId="formBasicChecbox">
                    {props.category.subcategories.length===0?
                        (<></>)
                        :(props.category.subcategories.map((subcategory,i)=>(<Form.Check key={i} type="checkbox" value= {subcategory} label={subcategory} checked={true} />)))}
                </Form.Group>
            </div> */}
    </Form>)
}

export default CategoryList