import React from "react";
import styled from "styled-components";

import TodoTitle from "./TodoTitle";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";

export default function TodoTemplate() {
  return (
    <Container>
      <TodoTitle />
      <TodoInsert />
      <TodoItemList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 750px;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  background-color: white;
`;
