import React from "react";
import styled from "styled-components";

export default function TodoTitle() {
  return (
    <Container>
      <Title>TODO LIST</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  padding: 20px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 42px;
  font-weight: 800;
  text-align: center;
  color: #fedf48;
`;
