import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <div>
      <GlobalStyle />
      <TodoTemplate />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Nanum Gothic', sans-serif;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-color: #e2e2e2;
  } 
`;

export default App;
