import React from "react";
import styled from "styled-components";

export default function TodoItem() {
  return (
    <Container>
      <DoneBtn></DoneBtn>
      <Txt>리액트</Txt>
      <DeleteBtn>―</DeleteBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  margin: 4px 0;
`;

const DoneBtn = styled.button`
  width: 36px;
  height: 100%;
  border: 1.5px solid #c9c9c9;
  border-radius: 50%;
  background-color: white;
`;

const Txt = styled.p`
  font-size: 16px;
  width: 80%;
  margin: 0 12px;
`;

const DeleteBtn = styled.button`
  width: 36px;
  height: 100%;
  border: none;
  background-color: white;
  font-size: 24px;
  font-weight: 800;
  line-height: 100%;
  color: #fedf48;
`;
