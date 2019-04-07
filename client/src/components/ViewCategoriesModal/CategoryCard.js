import React, { Component } from "react";
import { Card } from 'react-bootstrap'
import SubcategoryCardBody from "./SubcategoryCardbody"





class CategoryCard extends Component {



    render() {
        return (
            <>
            

            <Card className="py-1 rem-0.1875 mb-2">
                
                <Card.Body className="p-0 my-2">
                    <div className="p-0 m-0 d-flex">
                        <div className="mr-auto">
                            <input value={this.props.category.name}></input>
                        </div>
                        <div>
                            <button class="blackButton"> Add Subcategory</button><button class="blackButton"> Delete</button>
                        </div>
                    </div>
                </Card.Body>
                {this.props.category.subcategories.map(subcategory=>(
                    <SubcategoryCardBody subcategory={subcategory}/>
                ))}
            </Card>
            </>)
    }
}

export default CategoryCard