import React from "react";
import styled from "styled-components";

export default function TodoInsert() {
  return (
    <Container>
      <Form>
        <TextInput type="text" placeholder="오늘의 할일을 입력하세요." />
        <AddBtn type="submit">+</AddBtn>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // wdith: 100%;
  height: 10%;
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
`;
