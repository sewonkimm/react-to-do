import React from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

function TodoInsert(props) {
  return (
    <form className="TodoInsert">
      <input placehodler="할 일을 입력하세요!" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
