// TODO - REFACTOR CODE LOTS OF REPETITION
// analyseInput = (textInput: any, e: any) => {
//   const textEntered: any = textInput.current.innerHTML;
//   const splitTextByLine = textEntered.split("\n");
//   console.log(splitTextByLine);
//   let formattedText: string = "";
//   splitTextByLine.forEach((perLine: any, index: number) => {
//     let str = perLine.trim();
//     let strLength = str.length;
//     let firstCharacter = str.substring(0, 1);
//     let lastCharacter = str.substring(strLength - 1, strLength);
//     console.log({ firstCharacter, lastCharacter });
//     if (firstCharacter === "#") {
//       formattedText += elementToString(
//         "span",
//         "hashtag" + index,
//         HeadingsStyle,
//         str,
//         true
//       );
//     } else if (str.includes(":")) {
//       let findColon = str.indexOf(":") + 1;
//       let getColonedString = str.substring(0, findColon);
//       let getStringAfterColon = str.substring(findColon, strLength);
//       if (getStringAfterColon.includes("//")) {
//         let findComment = str.indexOf("//");
//         let getCommentedString = str.substring(findComment, strLength);
//         let getInBetweenColonAndCommented = str.substring(
//           findColon,
//           findComment
//         );
//         formattedText += elementToString(
//           "span",
//           "colon" + index,
//           HeadingsStyle,
//           getColonedString
//         );
//         formattedText += elementToString(
//           "span",
//           "number" + index,
//           NumbersStyle,
//           getInBetweenColonAndCommented
//         );
//         formattedText += elementToString(
//           "span",
//           "comment" + index,
//           CommentsStyle,
//           getCommentedString,
//           true
//         );
//       } else {
//         formattedText += elementToString(
//           "span",
//           "colon" + index,
//           HeadingsStyle,
//           getColonedString
//         );
//         formattedText += elementToString(
//           "span",
//           "number" + index,
//           NumbersStyle,
//           getStringAfterColon,
//           true
//         );
//       }
//     } else {
//       formattedText += str;
//     }
//   });
//   textInput.current.innerHTML = formattedText;
// };
// // TODO - REFACTOR CODE LOTS OF REPETITION
// analyseKeys = (textInput: any, e: any) => {
//   const prevCharacter = this.state.prevCharacter;
//   const enteredKey: any = e.keyCode;
//   const enteredCharacter: any = e.key;
//   const textEntered: any = textInput.current.innerHTML;
//   let curLineNum = this.state.lineNumber;
//   console.log({ enteredCharacter, enteredKey, prevCharacter });
//   let formattedText: string = "";
//   console.log(this.hashTagMode, this.commentMode);
//   console.log(enteredKey);
//   switch (enteredKey) {
//     // hastag
//     case 51 && prevCharacter != 16:
//       this.hashTagMode = true;
//       formattedText += elementToString(
//         "span",
//         "hashtag" + curLineNum,
//         HeadingsStyle,
//         enteredCharacter
//       );
//       console.log(formattedText);
//       break;
//     // colon
//     case 186:
//       let findColon = textEntered.indexOf(":");
//       let getColonedString = textEntered.substring(0, findColon) + ":";
//       console.log(getColonedString);
//       formattedText += elementToString(
//         "span",
//         "colon" + curLineNum,
//         HeadingsStyle,
//         getColonedString
//       );
//       textInput.current.innerHTML = formattedText;
//       break;
//     // enter
//     case 13:
//       //TODO get word for that line
//       this.setState({ lineNumber: curLineNum++ });
//       this.hashTagMode = false;
//       this.commentMode = false;
//       break;
//     // comment
//     case 191 && prevCharacter === 191:
//       this.commentMode = true;
//       formattedText += elementToString(
//         "span",
//         "comment" + curLineNum,
//         HeadingsStyle,
//         enteredCharacter
//       );
//       break;
//     // ctrl + v
//     case 86 && (prevCharacter === 91 || prevCharacter === 17):
//       this.analyseInput(textInput, e);
//       break;
//     // ctrl + a
//     case 65 && (prevCharacter === 91 || prevCharacter === 17):
//     // backspace
//     // TODO Determine the selected removed line
//     case 8:
//     default:
//       // TODO Add letter in appropriate location
//       if (this.hashTagMode === true) {
//         let appendHashTag: any = document.getElementById(
//           "hashtag" + curLineNum
//         );
//         appendHashTag.innerText += enteredCharacter;
//       }
//       if (this.commentMode === true) {
//         let appendCommentText: any = document.getElementById(
//           "comment" + curLineNum
//         );
//         appendCommentText.innerText += enteredCharacter;
//       }
//       break;
//   }
//   this.setState({ prevCharacter: enteredKey });
//   console.log({ formattedText });
//   // textInput.current.innerHTML = formattedText;
// };
