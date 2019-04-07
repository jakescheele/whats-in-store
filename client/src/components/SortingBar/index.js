import React from "react";
import {Form} from 'react-bootstrap'

function SortingBar(props){
    return(<>
        <Form className="mb-3 mx-0" inline>
            <Form.Control 
            as="select" 
            style={{"width": "100%"}} 
            name="sorting"
            value={props.sorting}
            onChange={props.handleSorting}
            >
            <option value="default">Recent</option>
            <option value="priceLtoH">Price L-H</option>
            <option value="priceHtoL">Price H-L</option>
            <option value="stockLtoH">Stock L-H</option>
            <option value="stockHtoL">Stock H-L</option>
            <option value="NameAtoZ">Name A-Z</option>
            <option value="NameZtoA">Name Z-A</option>
            </Form.Control>
        </Form>
    </>)
}

export default SortingBar