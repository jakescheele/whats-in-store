import React, { Component } from "react";
import {Card, Button } from 'react-bootstrap'
import Axios from "axios";

class SubcategoryCardBody extends Component {
    state={
        subCreate:"",
        subUpdate:""
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value}= event.target;
        this.setState({[name]:value})
        console.log(this.state)
    }

    subCategoryDelete=(event)=>{
        event.preventDefault();
        console.log(event.target)
        Axios.post("/api/categories/deletesub",{id:event.target.id,name:event.target.name})
        .then(res=>{
            console.log(res)
            this.props.updateState()
        })
    }
    subCategoryCreate=(event)=>{
        event.preventDefault();
        console.log("creating")
        console.log(event.target.id)
        Axios.post("/api/categories/createsub",{id:event.target.id,name:event.target.name})
        .then((res)=>{
            this.props.updateState()
            console.log(res)
        })
    }
    subCategoryUpdate=(event)=>{
        event.preventDefault();
        console.log("creating")
        console.log(event.target.id)
        Axios.post("/api/categories/updatesub",{id:event.target.id,name:this.state.subUpdate,from:this.props.subcategory})
        .then((res)=>{
            this.props.updateState()
            console.log(res)
        })
    }

    render() {
        return (<>
                    <Card.Body className="p-0 my-1">
                    <div className="p-0 m-0 ml-5 d-flex">
                        <div className="mr-auto">
                            {this.props.subcategory?(<input placeholder={this.props.subcategory} name="subUpdate" onChange={this.handleChange} type="text" id={this.props.category._id}  ></input>):(<input name="subCreate" id="newsub" value={this.state.subCreate} placeHolder="create new subcategory" onChange={this.handleChange} type="text"></input>)}
                        </div>
                        <div>
                            {this.props.subcategory?(<><Button size="sm" id={this.props.category._id} name={this.props.subcategory} onClick={this.subCategoryUpdate} variant="success">update</Button><Button size="sm" className="blackButton" id={this.props.category._id} name={this.props.subcategory} onClick={this.subCategoryDelete} variant="danger">- delete</Button></>):
                            (<Button size="sm" className="blackButton" onClick={this.subCategoryCreate} name={this.state.subCreate} id={this.props.category._id} variant="success">+ create</Button>)}
                        </div>
                    </div>
                    </Card.Body>
                </>)
    }
}
export default SubcategoryCardBody

