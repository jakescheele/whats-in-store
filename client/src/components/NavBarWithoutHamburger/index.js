import React, { Component } from "react";
import BrandLogo from "../BrandLogo"


class Nav extends Component {
    state={
        collapse: true
    }

    hamburgerHandler = (e)=>{
        // e.preventDefault()

        this.setState({
            collapse: !this.state.collapse
        })
        console.log(this.state.collapse)
    }
    
    render(){
        return (<>
            <nav>
                <span><BrandLogo/></span>
                <div>{this.props.children}</div>
            </nav>
        </>)
    }
}



export default Nav;
