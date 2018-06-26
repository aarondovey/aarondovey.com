import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/photod" component={About} />
        <Route path="/music" component={About} />
      </Switch>
    </div>
  </Router>
);

export default App;
