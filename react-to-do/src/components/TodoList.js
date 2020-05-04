import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

function TodoList({ todos, onRemove, onToggle }) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={488.5} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링 할 때 쓰는 함수
      list={todos} //배열
      style={{ outline: 'none' }} // List에 기본 적용되는 스타일 제거
    />
  );
}

export default React.memo(TodoList);
