import React, { Component } from 'react';
import ToDo from '../components/todo'

class searchTodo extends Component {

  state = {
    search: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const lowChar = this.state.search.toLowerCase();
    const filteredTodos = this.props.todos.filter(todo => {
      // debugger
      return todo.content.toLowerCase().includes(lowChar)
    })
    this.props.filterTodos(filteredTodos);
    // this.props.createTodo(this.state);
    // this.props.history.push('/');
  }
  render() {

  let filteredList = this.props.filtered.map((todo, index) => <ToDo key={index+1} content={todo.content} completed={todo.completed} index={index} deleteTodo={this.props.deleteTodo} editTodo={this.props.editTodo} todoObj={todo}/>)

    return (
      <div>
        <h3>Search a Task </h3>

        <form onSubmit={this.handleSubmit}>

          <label>Search Key Words :</label><input type = "text" name='search' value={this.state.search} onChange={this.handleChange}/><br/>

          <label>Completed?</label>
          <input type='checkbox' name='completed' value={this.state.completed} onChange={this.handleChange} /><br/>

          <input type='submit' value='Search' />

        </form>

        <h3>Search Results:</h3>
          {filteredList}

          {/*
            <p>{this.props.filtered[0] ? this.props.filtered[0].content : "no results"}</p>
            */}
      </div>
    )
  }
}

export default searchTodo;