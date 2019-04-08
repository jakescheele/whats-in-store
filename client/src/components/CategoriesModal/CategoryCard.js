import React, { Component } from "react";
import { Button,Card } from 'react-bootstrap'
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
                
                <Card.Body className="p-0 mx-2 my-2">
                    <div className="p-0 m-0 d-flex">
                        <div className="mr-auto">
                            <input 
                                name="name" 
                                placeholder="New Category"
                                id={this.props.category._id} 
                                value={this.props.category.name} 
                                onChange={e=>this.props.updateCat(this.props.index,"name")(e.target.value)} 
                                type="text">
                            </input>
                        </div>
                        <div>
                            <Button 
                                className="mr-2 blackButton" 
                                onClick={(e)=>this.props.addSubCat(this.props.index)} 
                                id={this.props.category._id} 
                                size="sm" 
                                variant="outline-success"
                            >
                                + add subcat.
                            </Button>
                            <Button 
                                className="blackButton" 
                                onClick={(e)=>this.props.deleteCat(this.props.category._id)} 
                                id={this.props.category._id} 
                                variant="outline-danger"
                                size="sm"
                            >
                                - delete
                            </Button>
                        </div>
                    </div>
                </Card.Body>
                {this.props.category.subcategories.map((subcategory,i)=>(
                    <SubcategoryCardBody 
                        key={i} 
                        categoryIndex={this.props.index}
                        subcategoryIndex={i}
                        subcategory={subcategory}
                        updateSubCat={this.props.updateSubCat}
                        deleteSubCat={this.props.deleteSubCat}
                    />
                ))}
            </Card>)
    }
}

export default CategoryCard