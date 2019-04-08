import React from "react";
import {InputGroup, Button, FormControl} from 'react-bootstrap'


class SearchBar extends Component(){
    state={
        query:""
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value}=event.target;
        this.setState({[name]:value})
    }

    render(){
        return ( <InputGroup className="mb-3 mx-0">
            <FormControl
            placeholder="Search product name..."
            name="query" onChange={this.handleChange}
            />
            <InputGroup.Append>
            <Button name={this.state.query} onClick={this.props.searched} variant="secondary">Search</Button>
            </InputGroup.Append>
            </InputGroup>
        )
    }
}

  export default SearchBar