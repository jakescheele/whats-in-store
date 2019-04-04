import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Promos from "./pages/Promos";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import './App.css';
import Nav from "./components/NavBar";



class App extends Component {

  state={
    
    login:false,
    shopName:"",

  }

  loginStateHandler=(shopName)=>{
    this.setState({
      login: true,
      shopName: shopName
    })
  }

  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} login={this.loginStateHandler} loginState={this.state.login} shopName={this.state.shopName}/>
            <Route exact path="/dashboard" component={Dashboard} login={this.loginStateHandler} loginState={this.state.login} shopName={this.state.shopName}/>
            <Route exact path="/promos" component={Promos} login={this.loginStateHandler} loginState={this.state.login} shopName={this.state.shopName}/>
            <Route exact path="/inventory" component={Inventory} login={this.loginStateHandler} loginState={this.state.login} shopName={this.state.shopName}/>
            <Route exact path="/profile" component={Profile} login={this.loginStateHandler} loginState={this.state.login} shopName={this.state.shopName}/>
            <Route component={NoMatch} />
          </Switch>
      </Router>
    );

  }

}

export default App;



