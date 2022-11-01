import React from "react";
import { useState } from "react";
import styled from "styled-components";

import TodoTitle from "./TodoTitle";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";

export default function TodoTemplate() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부", done: true },
    { id: 2, text: "ts 공부", done: false },
  ]);

  const todayId = () => {
    let today = new Date();

    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    return month + "-" + date + "/" + hours + ":" + minutes + ":" + seconds;
  };

  const handleSubmit = (text) => {
    const todo = {
      id: todayId(),
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  return (
    <Container>
      <TodoTitle />
      <TodoInsert onSubmit={handleSubmit} />
      <TodoItemList todos={todos} onToggle={onToggle} />
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
