import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1> Title </h1>
        <TodoItem />
        <TodoForm />
      </div>
    )
  }
}

export default TodoList;
