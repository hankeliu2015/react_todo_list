import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>ToDo List </Link></li>
          <li><Link to='/new'>Create ToDo </Link></li>
          <li><Link to='/search'>Search Todo</Link></li>

        </ul>

      </nav>
    )
  }
}

export default Nav;
