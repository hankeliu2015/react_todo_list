import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ToDo extends Component {
  handleDelete = (e) => {
    e.preventDefault();
    this.props.deleteTodo(this.props.todoObj);
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.props.editTodo(this.props.todoObj);
  }

render() {

  return (
    <li>
      content: <Link to={`/todos/${this.props.index}`}>{this.props.content}</Link>; completed: {this.props.completed ? 'yes' : 'no'}

      <button onClick={this.handleEdit}>Complete Task</button>
      <button onClick={this.handleDelete}>Delete</button>
    </li>
    )
  }

}

export default ToDo;
