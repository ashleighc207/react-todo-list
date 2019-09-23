import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleEdit(evt){
    this.props.editItem(evt, this.props.id)
  }
  showEdit(evt) {
    let thisItem = evt.target.parentNode.parentNode;
    thisItem.querySelector('.TodoItem--description').classList.toggle('hidden')
    thisItem.querySelector('.TodoItem--edit_input').classList.toggle('hidden')

  }
  handleRemove(evt){
    this.props.removeItem(this.props.id)
  }

  handleChange(evt){
    this.props.editValue(evt)
  }

  render(){
    return(
      <div className="TodoItem" id={this.props.id}>
            <p className="TodoItem--description">{this.props.item}</p>
          <div className="hidden TodoItem--edit_input">
            <label htmlFor="edit-item">Edit Item</label>
            <input
              name="description"
              id="edit-item"
              value={this.props.description}
              onChange={this.handleChange}
              parentid={this.props.id}
            />
          </div>
        <div className="TodoItem--icons">
          <i onClick={this.showEdit} className="material-icons">edit</i>
          <i onClick={this.handleRemove} className="material-icons">delete</i>
        </div>
      </div>
    )
  }
}

export default TodoItem;
