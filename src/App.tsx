import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  KeyBindingUtil
} from "draft-js";

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
`;

const Divider = styled.div`
  width: 20px;
  color: #8ace2d;
`;

const Wrapper = styled.div`
  width: 400px;
  height: 300px;
  background-color: #212225;
  text-align: left;
  padding: 4px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 23px;
  cursor: text;
`;

const HeadingsStyle: string = `color: #e8b22f`;
const CommentsStyle: string = `color: #4e4f56`;
const KeywordStyle: string = `color: #6ac1eb`;
const NumbersStyle: string = `color: #e2e6e8`;
const AnswersStyle: string = `color: #8ace2d`;
const { hasCommandModifier } = KeyBindingUtil;

class App extends Component<any, any> {
  private onChange: any;
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
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState: any) => this.setState({ editorState });
  }

  myKeyBindingFn(e: any) {
    console.log(e);
    console.log(hasCommandModifier(e));
    if (e.keyCode === 83 ) {
      console.log("in");

      return "myeditor-save";
    }
    return getDefaultKeyBinding(e);
  }

  handleKeyCommand(command: string) {
    if (command === "myeditor-save") {
      // Perform a request to save your contents, set
      // a new `editorState`, etc.
      return "handled";
    }
    return "not-handled";
  }

  applyStyle = (e: any, style: any): void => {
    e.preventDefault();
    this.updateEditor(
      RichUtils.toggleInlineStyle(this.state.editorState, style)
    );
  };

  updateEditor(editorState: any): void {
    console.log("EditorSTATE: ", this.state.editorState.getCurrentContent());
    this.setState({ editorState });
  }

  render() {
    const text = this.state.text;
    const { editorState } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>Getting started.</p>
          <Wrapper>
            <Editor
              editorState={editorState}
              onChange={this.updateEditor.bind(this)}
              keyBindingFn={this.myKeyBindingFn}
              handleKeyCommand={this.handleKeyCommand}
            />
          </Wrapper>
        </header>
      </div>
    );
  }
}

export default App;
