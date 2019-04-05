import React, { Component } from "react";
import {Card, Button} from 'react-bootstrap'
import CategoryList from "./CategoryList"
import CategoryAPI from "../../utils/API/categories"



class CategorySideBar extends Component{
    state={
        categories: []
    }

    componentDidMount(){
        //axio request to find all categories in DB
        CategoryAPI.getCategories()
        .then(res=>{
            console.log(res.data)
            // set state
            this.setState({
                categories: res.data
            })

        })

    }
    
    categoryEditHandler = (e)=>{
        e.preventDefault()
        // trigger edit category modal
    }

    render(){
        return (<Card>
                    <Card.Header className="d-flex justify-content-between">
                        <span className="pt-1">Categories</span> 
                        <Button variant="outline-dark" size="sm" onClick={(e)=>this.props.show(null, "categoryModal")}><i className="far fa-plus-square mr-2"></i> Add/Edit Category</Button>
                    </Card.Header>
                    <Card.Body>
                    {this.state.categories===[]?(<></>):(this.state.categories.map(category=>(<CategoryList key={category.name} category={category}/>)))}
                    </Card.Body>
                </Card>)
    }
}

export default CategorySideBar;
