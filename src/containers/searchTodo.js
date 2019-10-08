import React, { Component } from 'react';
import ToDo from '../components/todo'

class searchTodo extends Component {

  state = {
    search: '',
    completed: false
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.search && this.state.completed) {
      const lowChar = this.state.search.toLowerCase();
      const filteredTodos = this.props.todos.filter(todo => {
        return todo.content.toLowerCase().includes(lowChar) && this.state.completed
      })
      this.props.filterTodos(filteredTodos);
    } else if (this.state.search) {
      const lowChar = this.state.search.toLowerCase();
      const filteredTodos = this.props.todos.filter(todo => {
        return todo.content.toLowerCase().includes(lowChar)
      })
      this.props.filterTodos(filteredTodos);
    } else if (this.state.completed) {
      const filteredTodos = this.props.todos.filter(todo => {
        return todo.completed
      })
      this.props.filterTodos(filteredTodos);
    }
  }

  handleResetSearch = (e) => {
    e.preventDefault();
    window.location.reload();
    // this.props.history.push('/search');
  }

  render() {

  let results = this.props.searchResults.map((todo, index) => <ToDo key={index+1} content={todo.content} completed={todo.completed} index={index} deleteTodo={this.props.deleteTodo} editTodo={this.props.editTodo} todoObj={todo}/>)

    return (
      <div>
        <h3>Search a Task </h3>
        <form onSubmit={this.handleSubmit}>
          <label>Search Key Words :</label><input type = "text" name='search' value={this.state.search} onChange={this.handleChange}/><br/>

          <label>Completed?</label>
          <input type='checkbox' name='completed' value={this.state.completed} onChange={this.handleChange} /><br/>

          <input type='submit' value='Search' />
        </form>

        <form onSubmit={this.handleResetSearch}><input type='submit' value='Reset Search'/></form>

        <h3>Search Results:</h3>
          {results}
      </div>
    )
  }
}

export default searchTodo;
