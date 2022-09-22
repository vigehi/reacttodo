/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import './TodoItem.css';
// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { completed, id, title } = this.props.todo;

    return (
      <li className="abc1">
        <div>
          <input
            type="checkbox"
            className="mm"
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button className="inputtext1" onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
