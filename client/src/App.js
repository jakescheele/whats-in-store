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
}

export default App;
