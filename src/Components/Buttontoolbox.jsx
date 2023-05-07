import React, { useRef, useState } from "react";
import ItalicsButton from "./ItalicsButton";
import UnderlineButton from "./UnderlineButton";
import HeadingButton from "./HeadingButton";
import HeadingButton2 from "./HeadingButton2";
import Mark from "./Mark";

function Buttontoolbox({
  selectedText,
  isBold,
  handleBoldButtonClick,
  top,
  left,
}) {
  const [isH2Selected, setIsH2Selected] = useState(false);

  const [isH3Selected, setIsH3Selected] = useState(false);

  const [isMSelected, setIsMSelected] = useState(false);

  // const [selectionCoordinates, setSelectionCoordinates] = useState({});

  // const [isButtonGroupVisible, setIsButtonGroupVisible] = useState(false);

  // const handleTextSelection = () => {
  //   const selection = window.getSelection();

  //   if (selection.rangeCount === 0) {
  //     return;
  //   }

  //   const selectedRange = selection.getRangeAt(0);
  //   const { top, left, width, height } = selectedRange.getBoundingClientRect();

  //   setSelectionCoordinates({
  //     top: top + window.pageYOffset,
  //     left: left + window.pageXOffset,
  //     width,
  //     height,
  //   });

  //   setIsButtonGroupVisible(true);
  // };

  const paragraphRef3 = useRef(null);

  function handleBoldClick(event) {
    console.log(selectedText);
  }

  const handleItalicButtonClick = () => {
    document.execCommand("italic", false, null);
  };

  const handleUnderlineButtonClick = () => {
    document.execCommand("underline", false, null);
  };

  const handleHeadingButtonClick = () => {
    const selectedText = window.getSelection().toString();
    const modifiedText = isH2Selected
      ? selectedText
      : `<h2>${selectedText}</h2>`;
    const range = window.getSelection().getRangeAt(0);
    range.deleteContents();
    const element = document.createElement(isH2Selected ? "span" : "h2");
    element.innerHTML = selectedText;
    range.insertNode(element);
    setIsH2Selected(!isH2Selected);
  };

  const handleHeadingButtonClick2 = () => {
    const selectedText = window.getSelection().toString();
    const modifiedText = isH3Selected
      ? selectedText
      : `<h3>${selectedText}</h3>`;
    const range = window.getSelection().getRangeAt(0);
    range.deleteContents();
    const element = document.createElement(isH3Selected ? "span" : "h3");
    element.innerHTML = selectedText;
    range.insertNode(element);
    setIsH3Selected(!isH3Selected);
  };

  const handleMarkButtonClick = () => {
    const paragraph = paragraphRef3.current;
    const selection = window.getSelection();

    if (selection.rangeCount === 0) {
      return;
    }

    const selectedRange = selection.getRangeAt(0);
    const selectedText = selectedRange.toString();

    if (isMSelected) {
      const textNode = document.createTextNode(selectedText);
      selectedRange.deleteContents();
      selectedRange.insertNode(textNode);
    } else {
      const quoteElement = document.createElement("q");
      quoteElement.textContent = selectedText;
      selectedRange.deleteContents();
      selectedRange.insertNode(quoteElement);
    }

    setIsMSelected(!isMSelected);
    selection.removeAllRanges();
  };

  return (
    <>
      <div
        className="button-group"
        style={{
          top: top,
          left: left,
        }}
      >
        <button onClick={handleBoldButtonClick} className="butc">
          <strong>B</strong>
        </button>
        {/* <button onClick={handleClick}><em>I</em></button>
        <button onClick={handleClick}><u>U</u></button>
        <button onClick={handleClick}>#</button>
        <button onClick={handleClick}>H2</button>
        <button onClick={handleClick}>H3</button> */}
        {/* <ItalicsButton/> */}
        <ItalicsButton
          id="ita"
          handleItalicButtonClick={handleItalicButtonClick}
        />
        <UnderlineButton
          handleUnderlineButtonClick={handleUnderlineButtonClick}
        />
        {/* # */}
        <HeadingButton handleHeadingButtonClick={handleHeadingButtonClick} />
        <HeadingButton2 handleHeadingButtonClick2={handleHeadingButtonClick2} />
        <Mark
          handleMarkButtonClick={handleMarkButtonClick}
          isMselected={isMSelected}
          className="butc"
        />
      </div>
    </>
  );
}

export default Buttontoolbox;
