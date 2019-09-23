import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.state = {
      editMode: false,
      editedItem: this.props.description,
      done: false
    }
  }
  handleEdit(evt){
    this.setState({editMode: !this.state.editMode})
  }

  handleDone(evt){
    this.setState({status: !this.state.status})
  }

  handleRemove(evt){
    this.props.removeItem(this.props.id)
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleCancel(evt){
    this.setState({editMode: false})
  }

  handleUpdate(evt){
    evt.preventDefault();
    this.props.editItem(this.props.id, this.state.editedItem)
    this.setState({editMode: false})
  }

  render(){
    return(
      <div className={this.state.editMode ? "TodoItem TodoItem--edit" : "TodoItem"} id={this.props.id}>
          {!this.state.editMode ?
            <p onClick={this.handleDone} className={!this.state.status ? "TodoItem--description" : "TodoItem--description_done"}>{this.props.item}</p>
          :
          <div className="TodoItem--edit_input">
          <form onSubmit={this.handleUpdate} className="TodoItem--form_edit">
            <div className="TodoItem--input_container">
              <label className="TodoItem--label" htmlFor="edit-item">Edit Item</label>
              <input
                type="text"
                name="editedItem"
                id="edit-item"
                onChange={this.handleChange}
                parentid={this.props.id}
                value={this.state.editedItem}
                className="TodoItem--input"
              />
            </div>
              <button className="TodoItem--button_save">Save</button>
              <i className="material-icons" onClick={this.handleCancel}>close</i>
            </form>
          </div>
        }
        {!this.state.editMode ?
          <div className="TodoItem--icons">
            <i onClick={this.handleEdit} className="material-icons edit">edit</i>
            <i onClick={this.handleRemove} className="material-icons delete">delete</i>
          </div>
          : null }
      </div>
    )
  }
}

export default TodoItem;
