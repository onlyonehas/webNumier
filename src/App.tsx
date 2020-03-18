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

const HeadingsStyle: string = `color: "#e8b22f";`;
const CommentsStyle: string = `color: "#4e4f56";`;
const KeywordStyle: string = `color: "#6ac1eb";`;
const NumbersStyle: string = `color: "#e2e6e8"`;
const AnswersStyle: string = `color: "#8ace2d"`;

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
  private hashTagMode: boolean = false;
  private commentMode: boolean = false;

  constructor(props: any) {
    super(props);
    this.state = {
      text: "",
      prevCharacter: 0,
      prevWord: "",
      lineNumber: 0
    };
    this.textInput = React.createRef();
  }

  // TODO - REFACTOR CODE LOTS OF REPETITION
  analyseInput = (textInput: any, e: any) => {
    const textEntered: any = textInput.current.innerHTML;
    const splitTextByLine = textEntered.split("\n");
    console.log(splitTextByLine);
    let formattedText: string = "";
    splitTextByLine.forEach((perLine: any, index: number) => {
      let str = perLine.trim();
      let strLength = str.length;
      let firstCharacter = str.substring(0, 1);
      let lastCharacter = str.substring(strLength - 1, strLength);
      console.log({ firstCharacter, lastCharacter });

      if (firstCharacter === "#") {
        formattedText += elementToString(
          "span",
          "hashtag" + index,
          HeadingsStyle,
          str,
          true
        );
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
            "colon" + index,
            HeadingsStyle,
            getColonedString
          );
          formattedText += elementToString(
            "span",
            "number" + index,
            NumbersStyle,
            getInBetweenColonAndCommented
          );

          formattedText += elementToString(
            "span",
            "comment" + index,
            CommentsStyle,
            getCommentedString,
            true
          );
        } else {
          formattedText += elementToString(
            "span",
            "colon" + index,
            HeadingsStyle,
            getColonedString
          );

          formattedText += elementToString(
            "span",
            "number" + index,
            NumbersStyle,
            getStringAfterColon,
            true
          );
        }
      } else {
        formattedText += str;
      }
    });
    textInput.current.innerHTML = formattedText;
  };

  // TODO - REFACTOR CODE LOTS OF REPETITION
  analyseKeys = (textInput: any, e: any) => {
    const prevCharacter = this.state.prevCharacter;
    const enteredKey: any = e.keyCode;
    const enteredCharacter: any = e.key;
    const textEntered: any = textInput.current.innerHTML;
    let curLineNum = this.state.lineNumber;

    console.log({ enteredCharacter, enteredKey, prevCharacter });
    let formattedText: string = "";

    switch (enteredKey) {
      // hastag
      case 51:
        this.hashTagMode = true;

        formattedText += elementToString(
          "span",
          "hashtag" + curLineNum,
          HeadingsStyle,
          enteredCharacter
        );
        console.log(formattedText);
      // colon
      case 186:
        this.commentMode = true;

        formattedText += elementToString(
          "span",
          "colon" + curLineNum,
          HeadingsStyle,
          enteredCharacter
        );
      // enter
      case 13:
        //TODO get word for that line
        this.setState({ lineNumber: curLineNum++ });
      // comment
      case 191 && prevCharacter === 191:
        formattedText += elementToString(
          "span",
          "comment" + curLineNum,
          HeadingsStyle,
          enteredCharacter
        );
      // ctrl + v
      case 86 && (prevCharacter === 91 || prevCharacter === 17):
        this.analyseInput(textInput, e);
      // ctrl + a
      case 65 && (prevCharacter === 91 || prevCharacter === 17):
      // backspace
      case 8:
      default:
        // TODO Add letter in appropriate location
        break;
    }
    this.setState({ prevCharacter: enteredKey });
    console.log({ formattedText });
    textInput.current.innerHTML = formattedText;
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
              onKeyUp={(e: any) => this.analyseKeys(this.textInput, e)}
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
