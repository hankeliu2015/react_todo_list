import React, { Component } from 'react';

class TodoNew extends Component {

  state = {
    content: '',
    content1: '',
    content2: '',
    completed: false
  }

  render() {
    console.log(this.state)


    return (
      <div>
        <h3>Add a new task </h3>

        <form>
          <label>Content :</label><input type = "text" name='content' value={this.state.content}/><br/>
          <label>Content1:</label><input type = "text" name='content1' value={this.state.content1}/><br/>
          <label>Content2:</label><input type = "text" name='content2' value={this.state.content2}/><br/>
          <input type='submit' value='Add Todo' />

        </form>
      </div>
    )
  }
}

export default TodoNew;
