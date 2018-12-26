import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home/Home';
import Photos from './components/Photos/Photos';
import Music from './components/Music/Music';
// import Placeholder from './components/Placeholder';

import './App.css';

const App = () => (

    <Router>
        <div className="App">
          <Nav/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/photos" component={Photos} />
              <Route path="/music" component={Music} />
            </Switch>
        </div>
    </Router>

);

export default App;
