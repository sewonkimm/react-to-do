import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

function TodoList(props) {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
}

export default TodoList;
