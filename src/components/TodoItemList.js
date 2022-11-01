import React from "react";
import styled from "styled-components";

import TodoItem from "./TodoItem";

export default function TodoItemList({ todos, onToggle, onDelete }) {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 80%;
  width: 100%;
  padding: 20px;
`;
