import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import TodoList from './containers/todoList'
import TodoNew from './containers/todonew'
import TodoShow from './containers/todoshow'

class App extends Component {

  state = {
    todos: [
      {content: "Finish Building App", completed: true},
      {content: "Having Breakfast", completed: false},
      {content: "Do Laundry", completed: false}
    ]
  }

  createTodo = (newTaskObj) => {
    this.setState({todos: [...this.state.todos, newTaskObj]})
  }

  deleteTodo = (todoObj) => {
    let i = this.state.todos.indexOf(todoObj)
    let stateTodos = this.state.todos
    stateTodos.splice(i,1);
    this.setState({
      todos: stateTodos
    })
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
            <Route exact path='/' render={(props) => <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>} />
            <Route exact path='/new' render={(props) => <TodoNew {...props} createTodo={this.createTodo}/>}/>
            <Route exact path = '/todos/:id' render={(props) => <TodoShow {...props} todos = {this.state.todos}/>} />


          </Switch>
        </Router>


      </div>
    );


  }
}

export default App;
