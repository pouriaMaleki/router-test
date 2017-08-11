import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div className="App-intro">
            <Route path="/home" component={ (props) => <Home name={"Pouria"} {...props} /> }/>
            <Route path="/entry" component={ (props) => <Home name={"Pouria"} {...props} /> }/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
