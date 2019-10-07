import React, { Component } from 'react';

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
      return todo.content.toLowerCase().includes(lowChar)
    })

    // this.props.createTodo(this.state);
    // this.props.history.push('/');
  }
  render() {

    return (
      <div>
        <h3>Search a Task </h3>

        <form onSubmit={this.handleSubmit}>

          <label>Search Key Words :</label><input type = "text" name='search' value={this.state.search} onChange={this.handleChange}/><br/>

        {/*
          <label>Content1:</label><input type = "text" name='content1' value={this.state.content1} onChange={this.handleChange}/><br/>
          <label>Content2:</label><input type = "text" name='content2' value={this.state.content2} onChange={this.handleChange}/><br/>
          */}

          <label>Completed?</label>
          <input type='checkbox' name='completed' value={this.state.completed} onChange={this.handleChange} /><br/>

          <input type='submit' value='Search' />

        </form>

        <h3>Search Results:</h3>
          <p>{this.state.search}</p>
      </div>
    )
  }
}

export default searchTodo;
