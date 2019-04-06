import React, { Component } from "react";
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'



class SubcategoryCardBody extends Component {



    render() {
        return (<>
                    <Card.Body className="p-0 my-1">
                    <div className="p-0 m-0 ml-5 d-flex">
                        <div className="mr-auto">
                            <input value={this.props.subcategory}></input>
                        </div>
                        <div>
                            <button class="blackButton">Delete</button>
                        </div>
                    </div>
                    </Card.Body>
                </>)
    }
}

export default SubcategoryCardBody

