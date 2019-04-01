<<<<<<< HEAD
import React from 'react';
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

function App() {

  return (
    <Router>

      <div>

        <Nav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/promos" component={Promos} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );



=======
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './nav/index.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" component={login} />
        <Route path="/signup" component={login} />

      </Router>
    );
  }
>>>>>>> master
}

export default App;



