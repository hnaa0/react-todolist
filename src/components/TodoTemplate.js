import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import TodoTitle from "./TodoTitle";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";

export default function TodoTemplate() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todoItems")
      ? JSON.parse(localStorage.getItem("todoItems"))
      : [
          { id: 1, text: "react 강의 듣기", done: true },
          { id: 2, text: "ts 강의 듣기", done: false },
        ]
  );

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
    localStorage.setItem("todoItems", JSON.stringify(todos));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
    localStorage.setItem("todoItems", JSON.stringify(todos));
  };

  const onDelete = (id) => {
    if (window.confirm("해당 일정을 삭제하시겠습니까?") === true) {
      setTodos(todos.filter((todo) => todo.id !== id));
      localStorage.setItem("todoItems", JSON.stringify(todos));
    } else return;
  };

  useEffect(() => {
    const todoItems_local = localStorage.getItem("todoItems");
    if (todoItems_local) {
      setTodos(JSON.parse(todoItems_local));
    }
  }, []);

  useEffect(() => {
    if (todos) {
      localStorage.setItem("todoItems", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <Container>
      <TodoTitle />
      <TodoInsert onSubmit={handleSubmit} />
      <TodoItemList todos={todos} onToggle={onToggle} onDelete={onDelete} />
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
