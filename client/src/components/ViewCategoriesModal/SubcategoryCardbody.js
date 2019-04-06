import React, { Component } from "react";
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'



class SubcategoryCardBody extends Component {
    state={
        subCreate:""
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value}= event.target
    }
    render() {
        return (<>
                    <Card.Body className="p-0 my-1">
                    <div className="p-0 m-0 ml-5 d-flex">
                        <div className="mr-auto">
                            {this.props.subcategory?(<input value={this.props.subcategory} ></input>):(<input name="subCreate" type="text"></input>)}
                        </div>
                        <div>
                            {this.props.subcategory?(<Button size="sm" name="sub" onClick={()=>this.props.catDelete(this.props.subcategory)} variant="danger">- delete</Button>):(<Button size="sm" onclick={()=>this.props.addCat(this.state.subCreate)} name="sub" variant="success">+ create</Button>)}
                        </div>
                    </div>
                    </Card.Body>
                </>)
    }
}
export default SubcategoryCardBody

