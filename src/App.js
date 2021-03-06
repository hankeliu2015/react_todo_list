import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import TodoList from './containers/todoList'
import TodoNew from './containers/todonew'
import TodoShow from './containers/todoshow'
import SearchTodo from './containers/searchTodo'

class App extends Component {

  state = {
    todos: [
      {content: "Having Breakfast", completed: true},
      {content: "Finish Building App", completed: true},
      {content: "Group Meeting", completed: true},
      {content: "Lunch Break", completed: false},
      {content: "Team Meeting", completed: false},
      {content: "Pickup Laundry", completed: false}
    ],
    searchResults: []
  }

  createTodo = (newTaskObj) => {
    this.setState({todos: [...this.state.todos, newTaskObj]})
  }

  deleteTodo = (todoObj) => {
    let i = this.state.todos.indexOf(todoObj)
    let j = this.state.searchResults.indexOf(todoObj)
    let stateTodos = this.state.todos
    let stateSearchResults = this.state.searchResults
    stateTodos.splice(i,1);
    stateSearchResults.splice(j,1);
    this.setState({
      todos: stateTodos,
      searchResults: stateSearchResults
    })
  }

  editTodo = (todoObj) => {
    let i = this.state.todos.indexOf(todoObj)
    // this.state.todos array, i element completed value set to true
    let stateTodos = this.state.todos
    stateTodos[i].completed = true

    this.setState({
      todos: stateTodos
    })
  }

  filterTodos = (arrayObj) => {
    this.setState ({
      searchResults: arrayObj
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            Learn React
          </a>
        </header>

        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' render={(props) => <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/>} />
            <Route exact path='/new' render={(props) => <TodoNew {...props} createTodo={this.createTodo}/>}/>
            <Route exact path = '/todos/:id' render={(props) => <TodoShow {...props} todos = {this.state.todos}/>} />

            <Route exact path = '/search' render={(props) => <SearchTodo {...props} todos = {this.state.todos} filterTodos={this.filterTodos} searchResults={this.state.searchResults} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/>} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
