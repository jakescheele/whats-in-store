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
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import './App.css';
import './index.css';
import Nav from "./components/NavBar";



class App extends Component {

  state={
    
    login: false,
    shop:{},

  }

  loginStateHandler=(shop)=>{
    console.log("log in!!!")
    this.setState({
      login: true,
      shop: shop
    })
  }

  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/" 
            render={props=><LandingPage {...props} login={this.loginStateHandler} loginState={this.state.login} shopName={this.state.shopName} />} 
            />
            <Route exact path="/dashboard" 
            render={props=><Dashboard {...props} login={this.loginStateHandler} loginState={this.state.login} shopName={this.state.shopName} />}
            />
            <Route exact path="/promos" 
            render={props=><Promos {...props} login={this.loginStateHandler} loginState={this.state.login} shopName={this.state.shopName} />}
            />
            <Route exact path="/inventory" 
            render={props=> <Inventory {...props} login={this.loginStateHandler} loginState={this.state.login} shopName={this.state.shopName} />}
            />
            <Route exact path="/profile" 
            render={props=><Profile {...props} login={this.loginStateHandler} loginState={this.state.login} shopName={this.state.shopName} />}
            />
            <Route exact path="/login" component={Login}></Route>
            <Route component={NoMatch} />
          </Switch>
      </Router>
    );

  }

}

export default App;


