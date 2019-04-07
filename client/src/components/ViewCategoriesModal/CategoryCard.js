import React, { Component } from "react";
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'
import SubcategoryCardBody from "./SubcategoryCardbody"
import Axios from "axios";

class CategoryCard extends Component {
    state={
        name:"",
    }
    
    updateCategory=(event)=>{
        event.preventDefault();
        console.log(this.state)
        Axios.post("/api/categories/update",{name:this.state.name,id:event.target.id})
        .then(function(res){
            console.log(res)
        })        
    }
    deleteCategory=(event)=>{
        event.preventDefault();
        console.log(this.state)
        Axios.post("/api/categories/delete",{id:event.target.id})
        .then(function(res){
            console.log(res)
        })        
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value} = event.target;
        const {id}=event.target;
        this.setState({[name]:value,_id:id})
        console.log(this.state)
    }

    render() {
        return (
            <Card className="py-1 rem-0.1875 mb-2">
                
                <Card.Body className="p-0 my-2">
                    <div className="p-0 m-0 d-flex">
                        <div className="mr-auto">
                            <input name="name" id={this.props.category._id} placeholder={this.props.category.name} onChange={this.handleChange} type="text"></input>
                        </div>
                        <div>
                            <Button className="mr-2" onClick={this.updateCategory} id={this.props.category._id} size="sm" variant="success">Update</Button><Button onClick={this.deleteCategory} id={this.props.category._id} size="sm" variant="danger">- delete</Button>
                        </div>
                    </div>
                </Card.Body>
                {this.props.category.subcategories.map((subcategory,i)=>(
                    <SubcategoryCardBody updateState={this.props.updateState} category={this.props.category} key={i} subcategory={subcategory}/>
                ))}
                <SubcategoryCardBody updateState={this.props.updateState} category={this.props.category} />
            </Card>)
    }
}

export default CategoryCard