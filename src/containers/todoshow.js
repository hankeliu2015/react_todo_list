import React, { Component } from 'react';

class TodoShow extends Component {
  render () {
    const todo = this.props.todos[this.props.match.params.id]
    return (
      <div>
        <h3>{todo.content}</h3>
        <p>
          {todo.completed ? "Great Job!" : "Please take care of it."}
        </p>
      </div>

    )
  }
}

export default TodoShow;
