import React from "react";
import styled from "styled-components";

import TodoItem from "./TodoItem";

export default function TodoItemList() {
  return (
    <Container>
      <TodoItem />
    </Container>
  );
}

const Container = styled.div`
  height: 80%;
  width: 100%;
  padding: 20px;
`;
