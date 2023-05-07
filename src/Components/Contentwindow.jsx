import React, { useEffect, useRef, useState } from "react";
import Buttontoolbox from "./Buttontoolbox";
import HeadingButton from "./HeadingButton";

function Contentwindow() {
  const [selectedText, setSelectedText] = useState("");
  const [isBold, setIsBold] = useState(false);

  const [selectionCoordinates, setSelectionCoordinates] = useState({});
  const [isButtonGroupVisible, setIsButtonGroupVisible] = useState(false);

  const handleTextSelection = () => {
    const selection = window.getSelection();

    if (selection.rangeCount === 0) {
      return;
    }

    const selectedRange = selection.getRangeAt(0);
    const { top, left, width, height } = selectedRange.getBoundingClientRect();

    setSelectionCoordinates({
      top: top + window.pageYOffset,
      left: left + window.pageXOffset,
      width,
      height,
    });

    setIsButtonGroupVisible(true);
  };

  const handleMouseUp = (event) => {
    const selectedText = window.getSelection().toString();
    setSelectedText(selectedText);

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      setSelectedText(range.toString());
    }
  };
  function handleBoldButtonClick() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      range.deleteContents();
      const newSpan = document.createElement("span");
      newSpan.style.fontWeight = isBold ? "normal" : "bold";
      newSpan.appendChild(document.createTextNode(selectedText));
      range.insertNode(newSpan);
      setIsBold(!isBold);
    } else {
      range.deleteContents();
      const newSpan = document.createElement("span");
      newSpan.style.fontWeight = "bold";
      newSpan.appendChild(document.createTextNode(selectedText));
      range.insertNode(newSpan);
    }

    console.log(`Selected text: ${window.getSelection().toString()}`);
  }

  const paragraphRef = useRef(null);

  const paragraphRef1 = useRef(null);

  const paragraphRef2 = useRef(null);

  return (
    <>
      <div className="cont">
        {isButtonGroupVisible && (
          <Buttontoolbox
            isBold={isBold}
            handleBoldButtonClick={handleBoldButtonClick}
            top={selectionCoordinates.top}
            left={selectionCoordinates.left + selectionCoordinates.width / 2}
          />
        )}
      </div>

      <div onMouseUp={handleTextSelection}>
        <div onMouseUp={handleMouseUp}>
          {/* {isButtonGroupVisible && (
        <Buttontoolbox
          isBold={isBold}
          handleBoldButtonClick={handleBoldButtonClick}
          top={selectionCoordinates.top} 
          left={selectionCoordinates.left + selectionCoordinates.width / 2}
        />
        )} */}

          <div className="head">
            <h1>MY PARAGRAPH</h1>
          </div>
          <div className="head">
            <h3>This is a test paragraph to test tool!</h3>
          </div>
          <p
            id="p"
            ref={{ paragraphRef, paragraphRef1, paragraphRef2 }}
            contentEditable="true"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur! Commodi minima excepturi
            repudiandae velit hic maxime doloremque. Quaerat provident commodi
            consectetur veniam similique ad earum omnis ipsum saepe, voluptas,
            hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam
            cupiditate excepturi mollitia maiores labore suscipit quas? Nulla,
            placeat. Voluptatem quaerat non architecto ab laudantium modi minima
            sunt esse temporibus sint culpa, recusandae aliquam numquam totam
            ratione voluptas quod exercitationem fuga. Possimus quis earum
            veniam quasi aliquam eligendi, placeat qui corporis!
          </p>
        </div>
      </div>
    </>
  );
}

export default Contentwindow;
