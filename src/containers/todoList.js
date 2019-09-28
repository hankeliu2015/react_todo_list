import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    let list = this.props.todos.map((todo, index) => <ToDo key={index+1} content={todo.content} completed={todo.completed} index={index}/>)

  return (
    <ul>{list}</ul>
  )}
}

export default TodoList;
