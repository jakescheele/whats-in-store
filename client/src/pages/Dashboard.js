import React, {Component} from "react";
import Nav from "../components/NavBar";
import axios from "axios";


class Dashboard extends Component{
    state={
        login: false,
        shop:{},
    }

    componentDidMount(){
        axios.get("/auth/test")
        .then(res=>{
            console.log(res.data)
            if(res.data==="no user"){
                console.log("no user log in")
                window.location.assign("/login")
            }else{
                console.log("user logged in")
                this.setState({
                    login: true,
                    shop: res.data
                })
            }
        })
    }

    render(){
        return(<>
        <Nav shop={this.state.shop}/>
        <div>Here is Dashboard</div>
    </>)}
}

export default Dashboard;
