import React from 'react';

const ToDo = (props) => {
  return (
    <li>
      content: {props.content}; completed: {props.completed ? 'yet' : 'no'}; 
    </li>
  )
}

export default ToDo;
