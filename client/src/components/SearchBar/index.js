import React, { Component } from "react";
import {InputGroup, Button, FormControl} from 'react-bootstrap'

function SearchBar(){
    return  (<InputGroup className="mb-3 mx-0 p-0">
        <FormControl
        placeholder="Search product name..."
        />
        <InputGroup.Append>
        <Button variant="secondary">Search</Button>
        </InputGroup.Append>
    </InputGroup>
    )
}

  export default SearchBar