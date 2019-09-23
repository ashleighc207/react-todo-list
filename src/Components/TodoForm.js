import React, { Component } from 'react';
import './TodoForm.css';
const uuid = require('uuid/v4');


class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      description: ''
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const itemState = {...this.state, id: uuid()}
    this.props.addItem(itemState)
    this.setState({
      description: ''
    })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleFocus(evt){
  evt.target.previousSibling.classList.add('active')
  }

  handleBlur(evt){
    if(evt.target.value === "") {
      evt.target.previousSibling.classList.remove('active')
    }
  }

  render(){
    return(
      <div className="TodoForm">
        <form className="TodoForm--form" onSubmit={this.handleSubmit}>
          <div className="TodoForm--input_container">
            <label className="TodoForm--label" htmlFor="new-item">Add New Item</label>
            <input
            className="TodoForm--input"
              name="description"
              id="new-item"
              value={this.state.description}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </div>
          <button className="TodoForm--button"><i className="material-icons">add</i></button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
