import React, { Component } from 'react';

class TodoNew extends Component {

  state = {
    content: '',
    content1: '',
    content2: '',
    completed: false
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    // this.props.history.push('/');
  }
  render() {
    console.log(this.state)


    return (
      <div>
        <h3>Add a new task </h3>

        <form onSubmit={this.handleSubmit}>
          <label>Content :</label><input type = "text" name='content' value={this.state.content} onChange={this.handleChange}/><br/>
          <label>Content1:</label><input type = "text" name='content1' value={this.state.content1} onChange={this.handleChange}/><br/>
          <label>Content2:</label><input type = "text" name='content2' value={this.state.content2} onChange={this.handleChange}/><br/>
          <input type='submit' value='Add Todo' />

        </form>
      </div>
    )
  }
}

export default TodoNew;
