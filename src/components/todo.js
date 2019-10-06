import React from 'react';
import {Link} from 'react-router-dom';

const ToDo = (props) => {
  return (
    <li>
      content: <Link to={`/todos/${props.index}`}>{props.content}</Link>; completed: {props.completed ? 'yes' : 'no'};
    </li>
  )
}

export default ToDo;
