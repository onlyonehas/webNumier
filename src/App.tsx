import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import { elementToString } from "./helpers/htmlString";

const TextArea: any = styled.div`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  background-color: #212225;
  border: none;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin-left: 340px;
  width: 445px;
  height: 445px;
  text-align: left;
`;

const Divider = styled.div`
  width: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #212225;
`;

const Headings: string = `color: "orange"`;
const Answers: string = `color: "green"`;

const Keyword = styled.p`
  color: blue;
`;

class App extends Component<any, any> {
  private textInput = React.createRef<HTMLParagraphElement>();
  private defaultText = `
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

  constructor(props: any) {
    super(props);
    this.state = { text: this.defaultText };
    this.textInput = React.createRef();
  }

  applyColour = () => (event: any) => {
    // <Headings />;
    console.log(event);
  };

  analyseInput = (textInput: any, e: any) => {
    const textEntered: any = textInput.current.innerHTML;
    const splitTextByLine = textEntered.split("\n");
    console.log(splitTextByLine);
    let formattedText: string = "";
    splitTextByLine.forEach((perLine: any) => {
      let str = perLine.trim();
      let strLength = str.length;
      let firstCharacter = str.substring(0, 1);
      let lastCharacter = str.substring(strLength - 1, strLength);
      console.log({ firstCharacter, lastCharacter });

      if (firstCharacter === "#") {
        formattedText += elementToString("span", "color:orange;", str, true);
      } else if (str.includes(":")) {
        let findColon = str.indexOf(":") + 1;
        let getColonedString = str.substring(0, findColon);

        let getStringAfterColon = str.substring(findColon, strLength);
        if (getStringAfterColon.includes("//")) {
          let findComment = str.indexOf("//");
          let getCommentedString = str.substring(findComment, strLength);
          let getInBetweenColonAndCommented = str.substring(
            findColon,
            findComment
          );

          formattedText += elementToString(
            "span",
            "color:blue;",
            getColonedString
          );
          formattedText += elementToString(
            "span",
            "color:white;",
            getInBetweenColonAndCommented
          );

          formattedText += elementToString(
            "span",
            "color:grey;",
            getCommentedString,
            true
          );
        } else {
          formattedText += elementToString(
            "span",
            "color:blue;",
            getColonedString
          );

          formattedText += elementToString(
            "span",
            "color:white;",
            getStringAfterColon,
            true
          );
        }
      } else {
        formattedText += str;
      }
    });
    textInput.current.innerHTML = formattedText;

    // if (key === 186 || key === 35) {
    //   applyColour();
    // }
  };

  render() {
    const text = this.state.text;
    return (
      <div className="App">
        <header className="App-header">
          <p>Getting started.</p>
          <Wrapper>
            <TextArea
              ref={this.textInput}
              contentEditable="true"
              onKeyUp={(e: any) => this.analyseInput(this.textInput, e)}
            >
              {text}
            </TextArea>
            <Divider />
          </Wrapper>
        </header>
      </div>
    );
  }
}

export default App;
