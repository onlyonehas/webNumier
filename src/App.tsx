import React from "react";
import styled from "styled-components";
import "./App.css";

const TextArea = styled.textarea`
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #212225;
  border: none;
  height: 100px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
`;

const Divider = styled.div`
  width: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #212225;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Getting started.</p>
        <Wrapper>
          <TextArea></TextArea>
          <Divider> </Divider>
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
