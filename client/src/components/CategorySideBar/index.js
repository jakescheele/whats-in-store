import React, { Component } from "react";
import {Container, Col, Row, Card, Form, Button} from 'react-bootstrap'
import CategoryList from "./CategoryList"
import categories from "../../DummyCategories.json"
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
                    <Card.Header className="d-flex justify-content-between"><span className="pt-1">Categories</span> <Button variant="secondary" size="sm" onClick={(e)=>this.props.show(null, "categoryModal")}><i className="far fa-edit pr-1"></i>Edit</Button></Card.Header>
                    <Card.Body>
                    {this.state.categories.map(category=>(<CategoryList key={category.name} category={category}/>))}
                    </Card.Body>
                </Card>)
    }
}

export default CategorySideBar;
