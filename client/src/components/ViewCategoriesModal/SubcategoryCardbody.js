import React, { Component } from "react";
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'
import Axios from "axios";

class SubcategoryCardBody extends Component {
    state={
        subCreate:""
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value}= event.target;
        this.setState({[name]:value})
        console.log(this.state)
    }

    subCatagoryDelete=(event)=>{
        event.preventDefault();
        console.log(event.target)
        Axios.post("/api/catagories/subdelete",{_id:event.target.name})
        .then(function(res){
            console.log(res)
        })

    }
    subCategoryCreate=(event)=>{
        event.preventDefault();
        console.log("creating")
        console.log(event.target)
        Axios.post("/api/catagories/subcreate",{_id:event.target.name})
        .then(function(res){
            console.log(res)
        })
    }

    render() {
        return (<>
                    <Card.Body className="p-0 my-1">
                    <div className="p-0 m-0 ml-5 d-flex">
                        <div className="mr-auto">
                            {this.props.subcategory?(<input placeholder={this.props.subcategory.name} data={this.props.category._id}  ></input>):(<input name="subCreate" value={this.state.subCreate} onChange={this.handleChange} type="text"></input>)}
                        </div>
                        <div>
                            {this.props.subcategory?(<Button size="sm" name={this.props.category} onClick={this.subCategoryDelete} variant="danger">- delete</Button>):
                            (<Button size="sm" onClick={this.subCategoryCreate} name={this.state.subCreate} data={this.props.category._id} variant="success">+ create</Button>)}
                        </div>
                    </div>
                    </Card.Body>
                </>)
    }
}
export default SubcategoryCardBody

