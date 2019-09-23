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
    this.editValue = this.editValue.bind(this)
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

  editItem(val, item){
    let thisItem = document.getElementById(item);
    console.log(val, item)
  }

  editValue(evt) {
    evt.persist();
    let curId = evt.target.getAttribute('parentid');
    this.setState(prevState => {
      list: prevState.list.map(i => {
        if(curId && i.id === curId){
          i.description = evt.target.value;
        }
      })
    })
  }

  render() {
    return (
      <div className="TodoList">
        <h1 className="TodoList--title"> List </h1>
        {this.state.list.map(item => {
          return <TodoItem
                    key={item.id}
                    id={item.id}
                    item={item.description}
                    removeItem={this.removeItem}
                    editItem={this.editItem}
                    editMode={item.editMode}
                    editValue={this.editValue}
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
