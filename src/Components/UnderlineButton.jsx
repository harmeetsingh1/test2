import React from "react";

function UnderlineButton({ handleUnderlineButtonClick }) {
  return (
    <button onClick={handleUnderlineButtonClick} className="butc">
      <u>U</u>
    </button>
  );
}

export default UnderlineButton;
