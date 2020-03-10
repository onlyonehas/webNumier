import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const TextArea = styled.textarea`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  background-color: #212225;
  border: none;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin: 0px;
  width: 445px;
  height: 445px;
`;

const Divider = styled.div`
  width: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #212225;
`;

const Headings = styled.span`
  color: orange;
`;

const Answers = styled.p`
  color: green;
`;

const Keyword = styled.p`
  color: blue;
`;

const applyColour = () => (event: any) => {
  // <Headings />;
  console.log(event);
};

const analyseInput = (setText: Function) => (event: any) => {
  let key = event.keyCode;
  const textEntered = event.target.value;
  const splitTextByLine = textEntered.split("\n");
  let formattedText: string = "";
  splitTextByLine.forEach((perWord: string) => {
    let filterWord = perWord.split(":");
    filterWord.forEach(perWord => {
      let str = perWord.trim();
      let strLength = str.length;
      let firstCharacter = str.substring(0, 1);
      let lastCharacter = str.substring(strLength - 1, strLength);
      console.log(str);
      console.log(firstCharacter);

      if (firstCharacter === "#") {
        formattedText += <Headings>str</Headings> + "\n";
      } else {
        formattedText += str + "\n";
      }
    });
  });

  console.log("formattedText", formattedText);
  setText(formattedText);

  if (key === 186 || key === 35) {
    applyColour();
  }
};

function App() {
  const defaultText = `
  #Expenses 
  car: 441 //(01)
  british gas: 190 // or 200 
  utl: 142 //(01)  
  fuel/out: 130 //80 + 50 
  phone: 35 + 25 //60 (01)
  amazon: 4 //(29)
  Total: sum  
  Result: 2300-prev
  `;
  const [text, setText] = useState(defaultText);

  return (
    <div className="App">
      <header className="App-header">
        <p>Getting started.</p>
        <Wrapper>
          <TextArea defaultValue={text} onKeyUp={analyseInput(setText)} />
          <Divider />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
