import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ToDo extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.deleteTodo(this.props.todoObj);
  }

render() {

  return (
    <li>
      content: <Link to={`/todos/${this.props.index}`}>{this.props.content}</Link>; completed: {this.props.completed ? 'yes' : 'no'};<a href='#' onClick={this.handleClick}>Delete</a>
    </li>
    )
  }

}

export default ToDo;
