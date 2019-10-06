import React, { Component } from 'react';
import ToDo from '../components/todo'

class TodoList extends Component {


  render() {
    let list = this.props.todos.map((todo, index) => <ToDo key={index+1} content={todo.content} completed={todo.completed} index={index} deleteTodo={this.props.deleteTodo} todoObj={todo}/>)
    // debugger
  return (
    <ul>{list}</ul>
  )}
}

export default TodoList;
