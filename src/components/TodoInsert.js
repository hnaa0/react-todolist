import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function TodoInsert(props) {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작 방지
    if (content === "") return; // 내용 없으면 리턴
    props.onSubmit(content);
    setContent(""); // 입력창 초기화
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          value={content}
          maxLength="20"
          onChange={handleChange}
          placeholder="오늘의 할일을 입력하세요."
        />
        <AddBtn onClick={handleSubmit} type="submit">
          +
        </AddBtn>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
`;

const Form = styled.form`
  display: flex;
  height: 40px;
`;

const TextInput = styled.input`
  width: 360px;
  height: 100%;
  padding: 0 4px;
  margin-right: 8px;
  border: none;
  border-bottom: 2px solid #fedf48;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const AddBtn = styled.button`
  width: 40px;
  height: 100%;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  background-color: #fedf48;

  &:hover {
    cursor: pointer;
  }
`;
