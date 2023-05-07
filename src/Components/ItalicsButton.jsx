import React from "react";

function ItalicsButton({ handleItalicButtonClick }) {
  return (
    <>
      <button onClick={handleItalicButtonClick} className="butc">
        <em>I</em>
      </button>
    </>
  );
}

export default ItalicsButton;
