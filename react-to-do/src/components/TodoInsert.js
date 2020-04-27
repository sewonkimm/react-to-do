import React, { useState, useCallback } from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value 초기화

      e.preventDefault(); // onSubmit 후 브라우저 새로고침 방지
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요!"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
