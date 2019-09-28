import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import TodoList from './containers/todoList'
import TodoNew from './containers/todonew'

class App extends Component {

  state = {
    todos: [
      {content: "Finish Building App", completed: true},
      {content: "Having Breakfast", completed: false},
      {content: "Do Laundry", completed: false}
    ]
  }

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

        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' render={(props) => <TodoList todos={this.state.todos} />} />
            <Route exact path='/new' render={(props) => <TodoNew/>}/>
          </Switch>
        </Router>


      </div>
    );


  }
}

export default App;
