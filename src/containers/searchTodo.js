import React, { Component } from 'react';

class searchTodo extends Component {

  state = {

  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.props.history.push('/');
  }
  render() {

    return (
      <div>
        <h3>Search a Task </h3>

        <form onSubmit={this.handleSubmit}>
          <label>Content :</label><input type = "text" name='content' value={this.state.content} onChange={this.handleChange}/><br/>

        {/*
          <label>Content1:</label><input type = "text" name='content1' value={this.state.content1} onChange={this.handleChange}/><br/>
          <label>Content2:</label><input type = "text" name='content2' value={this.state.content2} onChange={this.handleChange}/><br/>
          */}

          <label>Completed?</label>
          <input type='checkbox' name='completed' value={this.state.completed} onChange={this.handleChange} /><br/>

          <input type='submit' value='Search' />

        </form>
      </div>
    )
  }
}

export default searchTodo;
