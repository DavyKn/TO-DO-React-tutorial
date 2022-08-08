import React from 'react';

const TodoItem = (props) => {
  return  (
    <li>
   <input type="checkoox"/> {props.todo.title}
  </li>
  )
  
}

export default TodoItem;