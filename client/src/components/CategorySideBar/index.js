import React, { Component } from "react";
import {Card, Button} from 'react-bootstrap'
import CategoryList from "./CategoryList";


class CategorySideBar extends Component{

    render(){
        return (<Card>
                    <Card.Header className="d-flex justify-content-between">
                        <span className="pt-1">Categories</span> 
                        <Button variant="outline-dark" size="sm" onClick={(e)=>this.props.show(null, "categoriesModal")}><i className="far fa-plus-square mr-2"></i> Add/Edit Category</Button>
                    </Card.Header>
                    <Card.Body>
                    {this.props.categories.length===0?
                        (<div>No category exists. Add a new one?</div>)
                        :(this.props.categories.map(category=>(<CategoryList 
                        key={category._id} 
                        category={category}
                        handleCheckBox={this.props.handleCheckBox}
                        filters={this.props.filters}
                    />)))}
                    </Card.Body>
                </Card>)
    }
}

export default CategorySideBar;
