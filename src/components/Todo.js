import React from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li>
    <label className="switch">
      {completed ? (
        <input type="checkbox" onClick={onClick} checked/>
      ) : (
        <input type="checkbox" onClick={onClick} />
      )}
      <span className="slider round"></span>
    </label>
    <span className="text">{text}</span>
  </li>
)

export default Todo
