/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import './TodoItem.css';

class InputTodo extends Component {
  state = {
    title: '',
  }

  onChange = (message) => {
    this.setState({
      [message.target.name]: message.target.value,
    });
  }

  eSubmit = (message) => {
    message.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Enter atleaset an item');
    }
  };

  render() {
    return (
      <form onSubmit={this.eSubmit} className="form-container">
        <input
          type="text"
          className="inputtext"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
      </form>
    );
  }
}
export default InputTodo;
