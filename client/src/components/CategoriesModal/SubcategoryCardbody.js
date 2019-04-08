import React, { Component } from "react";
import {Card, Button } from 'react-bootstrap'
import Axios from "axios";

class SubcategoryCardBody extends Component {
    // state={
    //     subCreate:"",
    //     subUpdate:""
    // }
    // handleChange=(event)=>{
    //     event.preventDefault();
    //     const {name,value}= event.target;
    //     this.setState({[name]:value})
    //     console.log(this.state)
    // }

    // subCategoryDelete=(event)=>{
    //     event.preventDefault();
    //     console.log(event.target)
    //     Axios.post("/api/categories/deletesub",{id:event.target.id,name:event.target.name})
    //     .then(res=>{
    //         console.log(res)
    //         this.props.updateState()
    //     })
    // }
    // subCategoryCreate=(event)=>{
    //     event.preventDefault();
    //     console.log("creating")
    //     console.log(event.target.id)
    //     Axios.post("/api/categories/createsub",{id:event.target.id,name:event.target.name})
    //     .then((res)=>{
    //         this.props.updateState()
    //         console.log(res)
    //     })
    // }
    // subCategoryUpdate=(event)=>{
    //     event.preventDefault();
    //     console.log("creating")
    //     console.log(event.target.id)
    //     Axios.post("/api/categories/updatesub",{id:event.target.id,name:this.state.subUpdate,from:this.props.subcategory})
    //     .then((res)=>{
    //         this.props.updateState()
    //         console.log(res)
    //     })
    // }

    render() {
        return (<>
                    <Card.Body className="p-0 mx-2 my-1">
                    <div className="p-0 m-0 ml-5 d-flex">
                        <div className="mr-auto">
                            <input
                                value={this.props.subcategory} 
                                type="text" 
                                onChange={e=>this.props.updateSubCat(this.props.categoryIndex, "subcategories", this.props.subcategoryIndex)(e.target.value)}
                            />
                        </div>
                        <div>
                            <Button size="sm" className="blackButton" name={this.props.subcategory} onClick={(e)=>this.props.deleteSubCat(this.props.categoryIndex, this.props.subcategoryIndex)} variant="outline-danger"> - delete </Button>
                        </div>
                    </div>
                    </Card.Body>
                </>)
    }
}
export default SubcategoryCardBody

