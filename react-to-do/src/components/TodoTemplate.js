import React from 'react';
import './TodoTemplate.scss';

function TodoTemplate(props) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">To Do List App</div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default TodoTemplate;
