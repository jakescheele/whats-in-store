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
        Axios.post("/api/categorey/update",{name:this.state.name,_id:this.state.data})
        .then(function(res){
            console.log(res)
        })        
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value} = event.target;
        const {data}=event.target;
        this.setState({[name]:value,_id:data})
        console.log(this.state)
    }

    render() {
        return (
            <Card className="py-1 rem-0.1875 mb-2">
                
                <Card.Body className="p-0 my-2">
                    <div className="p-0 m-0 d-flex">
                        <div className="mr-auto">
                            <input name="name" data={this.props.categroy} placeholder={this.props.category.name} onChange={this.handleChange} type="text"></input>
                        </div>
                        <div>
                            <Button className="mr-2" onClick={this.updateCategory} size="sm" variant="success">+ extend</Button><Button onClick={this.props.categoryDelete} name={this.props.category._id} size="sm" variant="danger">- delete</Button>
                        </div>
                    </div>
                </Card.Body>
                {this.props.category.subcategories.map(subcategory=>(
                    <SubcategoryCardBody category={this.props.category} subcategory={subcategory}/>
                ))}
                <SubcategoryCardBody category={this.props.category} />
            </Card>)
    }
}

export default CategoryCard