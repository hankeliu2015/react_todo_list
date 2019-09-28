import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import TodoList from './containers/todoList'

class App extends Component {

  render () {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>

        <br></br>


        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={TodoList}></Route>
            <Route exact path='/new'></Route>
          </Switch>
        </Router>


      </div>
    );


  }
}

export default App;
