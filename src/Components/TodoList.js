import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.editItem = this.editItem.bind(this)
  }

  addItem(item) {
    this.setState(prevState => {
      return { list: [...prevState.list, item] };
    })
  }

  removeItem(item){
    let thisItem = document.getElementById(item);
    this.setState({list: this.state.list.filter((listItem) => {
        return listItem.id !== item;
    })});
  }

  editItem(itemId, newItem) {
    const editedItems = this.state.list.map(item => {
      if(item.id === itemId){
        return {...item, description: newItem}
      }
        return item;
    })

    this.setState({ list: editedItems })

  }

  render() {
    return (
      <div className="TodoList">
        <h1 className="TodoList--title"> To-do List </h1>
        {this.state.list.map(item => {
          return <TodoItem
                    key={item.id}
                    id={item.id}
                    item={item.description}
                    removeItem={this.removeItem}
                    editItem={this.editItem}
                    description={item.description}
                  />
        })}
        <TodoForm
          addItem={this.addItem}
        />
      </div>
    )
  }
}

export default TodoList;
